import React from 'react';
import {Box, Center, Container, Flex, Grid} from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import Filter from "../components/Filter";

const Home = () => {
    return (
        <Container maxW="container.xl">
            <Box d='flex' mt='30px'>
                <Filter/>
            </Box>
            <Center>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} mt='30px'>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </Grid>
            </Center>
        </Container>
    );
};

export default Home;