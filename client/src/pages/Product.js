import React from 'react';
import {Box, Button, Container, Divider, Heading, Image} from "@chakra-ui/react";
import img from '../assets/default-product.png';
import {MdAddShoppingCart} from "react-icons/all";

const Product = () => {
    return (
        <Container maxW="container.xl" p='40px'>
            <Box d='flex' justifyContent='space-between'>
                <Image src={img}/>
                <Box>
                    <Heading fontSize='4em'>
                        Name of product
                    </Heading>
                    <Box fontSize='3em' mt='50px'>Price of product</Box>
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
                    >
                        Add to cart
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Product;