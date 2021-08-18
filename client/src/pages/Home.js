import React, {useContext} from 'react';
import {Box, Center, Container, Flex, Grid} from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import Filter from "../components/Filter";
import {Context} from "../index";

const Home = () => {
    const {productStore} = useContext(Context);

    return (
        <Container maxW="container.xl">
            <Box d='flex' mt='30px'>
                <Filter/>
            </Box>
            <Center>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} mt='30px'>
                    {productStore.products.map(product =>
                        <ProductItem product={product}/>
                    )}

                </Grid>
            </Center>
        </Container>
    );
};

export default Home;