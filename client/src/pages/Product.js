import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, Image, useToast} from "@chakra-ui/react";
import img from '../assets/default-product.png';
import {MdAddShoppingCart} from "react-icons/all";
import {Context} from "../index";
import {useParams} from "react-router-dom";

const Product = () => {
    const {cartStore} = useContext(Context);
    const [cartStoreState, setCartStoreState] = useState(cartStore);
    const {productStore} = useContext(Context);
    const {id} = useParams();
    const toast = useToast();
    const showToast = () => {
        toast({
            title: "Product added.",
            description: "Product added to your cart.",
            status: "success",
            duration: 9000,
            isClosable: true,
        })
    }
    return (
        <Container maxW="container.xl" p='40px'>
            <Box d='flex' justifyContent='space-between'>
                <Image src={img}/>
                <Box>
                    <Heading fontSize='4em'>
                        {productStore.products.map(product =>
                            product.id.toString() === id.toString() ? product.name : ''
                        )}
                    </Heading>
                    <Box fontSize='3em' mt='50px'>
                        {productStore.products.map(product =>
                            product.id.toString() === id.toString() ? `${product.price} rub.` : ''
                        )}
                    </Box>
                    <Divider mt='50px'/>
                    <Box mt='50px' fontSize='2em'>
                        <Box>Some additional info</Box>
                        <Box>Some additional info</Box>
                        <Box>Some additional info</Box>
                        <Box>Some additional info</Box>
                    </Box>
                    <Button
                        leftIcon={<MdAddShoppingCart />}
                        bg="#805AD5"
                        color='white'
                        variant="solid"
                        w='150px'
                        mt='30px'
                        onClick={() => {
                            setCartStoreState(cartStore.addProduct(parseInt(id)));
                            console.log(cartStore.ids);
                            showToast();
                            }
                        }
                    >
                        Add to cart
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Product;