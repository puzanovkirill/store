import React, {useContext} from 'react';
import {Box, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";

const Cart = () => {
    const {userStore} = useContext(Context);
    const {productStore} = useContext(Context);
    const {cartStore} = useContext(Context);
    let sum = 0;
    cartStore.ids.map(id =>
            sum += parseInt(productStore.products[id].price)
        );
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {userStore.currentUser.email}
            </Heading>
            <Box d='flex' flexDirection='column'>
                <OrderedList mt='20px'>
                    {cartStore.ids.map(id =>
                        <ListItem fontSize='2em' key={id} mt='10px'>
                            <Box d='flex' justifyContent='space-between'>
                                <Box>
                                    {productStore.products[id].name}
                                </Box>
                                <Box>
                                    {productStore.products[id].price} rub.
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