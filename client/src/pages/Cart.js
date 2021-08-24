import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";
import {FiDelete} from 'react-icons/fi';
import {useUser} from "../stores/UserStore";

const Cart = () => {
    const {productStore} = useContext(Context);
    const {cartStore} = useContext(Context);
    const [cartStoreState, setCartStoreState] = useState(cartStore);
    const [user, setUser] = useUser();
    console.log(cartStore);
    let sum = 0;
    // cartStore.ids.map(id =>
    //         sum += parseInt(productStore.products[id].price)
    //     );
    console.log(user);
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {user.first_name} {user.last_name}
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