import React, {useContext} from 'react';
import {Box, Container, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";

const Cart = () => {
    const {userStore} = useContext(Context);
    const {productStore} = useContext(Context);
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {userStore.currentUser.email}
            </Heading>
            <Box d='flex' flexDirection='column'>
                <OrderedList mt='20px'>
                    {productStore.products.map(product =>
                        <ListItem fontSize='2em' key={product.id}>
                            <Box d='flex' justifyContent='space-between'>
                                <Box>
                                    {product.name}
                                </Box>
                                <Box>
                                    {product.price} rub.
                                </Box>
                            </Box>
                        </ListItem>
                    )}
                </OrderedList>
            </Box>
        </Container>
    );
};

export default Cart;