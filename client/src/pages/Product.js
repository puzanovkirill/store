import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, Image, useToast} from "@chakra-ui/react";
import img from '../assets/default-product.png';
import {MdAddShoppingCart} from "react-icons/all";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {useProduct} from "../stores/ProductStore";
import {useUser} from "../stores/UserStore";
import {useCart} from "../stores/CartStore";

const Product = () => {
    const [product, setProduct] = useProduct();
    const [user, setUser] = useUser();
    const [cart, setCart] = useCart();
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
            <Box d='flex' justifyContent='space-evenly'>
                <Image src={img}/>
                <Box>
                    <Heading fontSize='4em' wordBreak='break'>
                        {product.map(product =>
                            product.id.toString() === id.toString() ? product.name : ''
                        )}
                    </Heading>
                    <Box fontSize='3em' mt='50px'>
                        {product.map(product =>
                            product.id.toString() === id.toString() ? `${product.price} rub.` : ''
                        )}
                    </Box>
                    <Divider mt='50px'/>
                    <Box mt='50px' fontSize='2em'>
                        {product.map(product =>{
                            if(product.id.toString() === id.toString()) {
                                return <Box>{product.properties.map(property => <Box>{property.name}: {property.value}</Box>)}</Box>
                            }
                        }
                        )}
                    </Box>
                    {user ? <Button
                        leftIcon={<MdAddShoppingCart />}
                        bg="#805AD5"
                        color='white'
                        variant="solid"
                        w='150px'
                        mt='30px'
                        onClick={() => {

                            showToast();
                        }
                        }
                    >
                        Add to cart
                    </Button>
                    : ''}

                </Box>
            </Box>
        </Container>
    );
};

export default Product;