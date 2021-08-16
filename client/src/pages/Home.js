import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";

const Home = () => {
    return (
        <Container maxW="container.xl">
            <Box d='flex'>
                settings
            </Box>
            <Box d='flex' flexWrap='wrap' justifyContent='center'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </Box>
        </Container>
    );
};

export default Home;