import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";
import {FiDelete} from 'react-icons/fi';

const Cart = () => {
    const {userStore} = useContext(Context);
    const {productStore} = useContext(Context);
    const {cartStore} = useContext(Context);
    const [cartStoreState, setCartStoreState] = useState(cartStore);
    console.log(cartStore);
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
                                    {productStore.products.map(product =>
                                        product.id === id ? product.name : ''
                                    )}
                                </Box>
                                <Box>
                                    {productStore.products.map(product =>
                                        product.id === id ? `${product.price} rub.` : ''
                                    )}
                                </Box>
                                <Button
                                    onClick={() => {
                                        setCartStoreState(cartStore.deleteProduct(id));
                                        console.log(cartStore.ids);
                                        }
                                    }
                                >
                                    <FiDelete/>
                                </Button>
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