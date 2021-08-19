import React, {useContext} from 'react';
import {Box, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";

const Cart = () => {
    const {userStore} = useContext(Context);
    const {productStore} = useContext(Context);
    let sum = 0;
    productStore.products.map(product =>
            sum += parseInt(product.price)
        );
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {userStore.currentUser.email}
            </Heading>
            <Box d='flex' flexDirection='column'>
                <OrderedList mt='20px'>
                    {productStore.products.map(product =>
                        <ListItem fontSize='2em' key={product.id} mt='10px'>
                            <Box d='flex' justifyContent='space-between'>
                                <Box>
                                    {product.name}
                                </Box>
                                <Box>
                                    {product.price} rub.
                                </Box>
                            </Box>
                            <Divider mt='10px'/>
                        </ListItem>
                    )}
                </OrderedList>
                <Box fontSize='2em' alignSelf='flex-end'>
                    Total: {sum} rub.
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;