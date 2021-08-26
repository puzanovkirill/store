import React from 'react';
import {Box, Center, Container, Grid} from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import Filter from "../components/Filter";
import {useProduct} from "../stores/ProductStore";
import {fetchProductsByCategory} from "../http/productAPI";

const Home = () => {
    const [product] = useProduct();
    return (
        <Container maxW={{xl: 'container.xl', lg: 'container.lg', md: 'container.md', sm: 'container.sm'}}>
            <Box d='flex' mt='30px'>
                <Filter/>
            </Box>
            <Center>
                <Grid
                    templateColumns={
                        {
                            xl: 'repeat(4, 1fr)',
                            lg: 'repeat(3, 1fr)',
                            md: 'repeat(2, 1fr)',
                            sm: ' repeat(1, 1fr)'
                        }
                    }
                    gap={6} mt='30px'
                >
                    {!product ? '' :
                        product.map(item =>
                        <ProductItem key={item['id']} id={item['id']} name={item['name']} price={item['price']}/>
                        )
                    }
                </Grid>
            </Center>
        </Container>
    );
};

export default Home;