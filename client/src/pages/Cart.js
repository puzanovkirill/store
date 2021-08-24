import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";
import {FiDelete} from 'react-icons/fi';
import {useUser} from "../stores/UserStore";
import {useCart} from "../stores/CartStore";
import {fetchCartItems} from "../http/cartAPI";

const Cart = () => {
    const {productStore} = useContext(Context);
    const {cartStore} = useContext(Context);
    const [user, setUser] = useUser();

    console.log(cartStore);
    let sum = 0;
    // cartStore.ids.map(id =>
    //         sum += parseInt(productStore.products[id].price)
    //     );
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {user.first_name} {user.last_name}
            </Heading>
            <Box d='flex' flexDirection='column'>
                <OrderedList mt='20px'>
                    {/*{cart.products.map(id =>*/}
                        <ListItem fontSize='2em' mt='10px'>
                            <Box d='flex' justifyContent='space-between'>
                                <Box>
                                    {/*item name*/}
                                </Box>
                                <Box>
                                {/*item price*/}
                                </Box>
                                <Button
                                    onClick={() => {
                                        //delete item
                                        }
                                    }
                                >
                                    <FiDelete/>
                                </Button>
                            </Box>
                            <Divider mt='10px'/>
                        </ListItem>
                    {/*)}*/}
                </OrderedList>
                <Box fontSize='2em' alignSelf='flex-end'>
                    Total: {sum} rub.
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;