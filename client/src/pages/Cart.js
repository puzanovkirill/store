import React from 'react';
import {Box, Button, Container, Divider, Heading, ListItem, OrderedList} from "@chakra-ui/react";
import {FiDelete} from 'react-icons/fi';
import {useUser} from "../stores/UserStore";
import {useCart} from "../stores/CartStore";
import { removeCartItem} from "../http/cartAPI";
import {useProduct} from "../stores/ProductStore";

const Cart = () => {
    const [cart ,setCart] = useCart();
    const [user] = useUser();
    const [product] = useProduct();
    return (
        <Container maxW='container.xl' mt='20px'>
            <Heading>
                User: {user.firstName} {user.lastName}
            </Heading>
            <Box d='flex' flexDirection='column'>
                <OrderedList mt='20px'>
                    {cart.products.map(cartItem =>
                        product.map(productItem => {
                            if(productItem.id.toString() === cartItem.toString()){
                                return <ListItem fontSize='2em' key={cartItem}>
                                    <Box d='flex' justifyContent='space-between' alignItems='center'>
                                        <Box d='flex' flexDirection='row' justifyContent='space-between' w='95%'>
                                            <Box>
                                                {productItem.name}
                                            </Box>
                                            <Box>
                                                {productItem.price} $
                                            </Box>
                                        </Box>
                                        <Button onClick={() => {
                                            removeCartItem(cartItem).then(data => setCart(data));
                                        }}>
                                            <FiDelete/>
                                        </Button>
                                    </Box>
                                </ListItem>
                            }
                        })
                    )}
                </OrderedList>
                <Divider mt='10px'/>

                <Box fontSize='2em' alignSelf='flex-end' mt='1em'>
                    Total: {cart.total} $
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;