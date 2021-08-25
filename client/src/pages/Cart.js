import React, {useContext, useState} from 'react';
import {Box, Button, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {Context} from "../index";
import {FiDelete} from 'react-icons/fi';
import {useUser} from "../stores/UserStore";
import {useCart} from "../stores/CartStore";
import {fetchCartItems} from "../http/cartAPI";
import {useProduct} from "../stores/ProductStore";

const Cart = () => {
    const {productStore} = useContext(Context);
    const [cart ,setCart] = useCart();
    const [user, setUser] = useUser();
    const [product, setProduct] = useProduct();
    console.log()

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
                    {cart.products.map(cartItem =>
                        product.map(productItem => {
                            if(productItem.id.toString() === cartItem.toString()){
                                return <ListItem fontSize='2em'>
                                    <Box d='flex' justifyContent='space-between' alignItems='center'>
                                        <Box d='flex' flexDirection='row' justifyContent='space-between' w='90%'>
                                            <Box>
                                                {productItem.name}
                                            </Box>
                                            <Box>
                                                {productItem.price} $
                                            </Box>
                                        </Box>
                                        <Button>
                                            <FiDelete/>
                                        </Button>
                                    </Box>
                                </ListItem>
                            }
                        })
                    )}
                </OrderedList>
                <Divider mt='10px'/>

                <Box fontSize='2em' alignSelf='flex-end'>
                    Total: {cart.total} $
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;