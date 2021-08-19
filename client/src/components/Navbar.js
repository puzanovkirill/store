import React, {useContext} from 'react';
import {Box, Container, Link} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import {CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const Navbar = () => {
    const {userStore} = useContext(Context);
    return (
        <Box bg="#805AD5" w="100%" p={4} color="white" >
            <Container maxW="container.xl" >
                <Box d='flex' justifyContent='space-between' alignItems='center'>
                        <Box>
                            <NavLink to={HOME_ROUTE} >
                                <Box
                                    textTransform='uppercase'
                                    letterSpacing='10px'
                                    fontSize='1.3em'
                                >
                                    Online store
                                </Box>
                            </NavLink>
                        </Box>
                            {userStore.isAuth ?
                                <Box d='flex' flexDirection='row'>
                                    <Link mr='30px' as={NavLink} to={CART_ROUTE}>
                                        <AiOutlineShoppingCart style={{width:30, height: 30}}
                                        />
                                    </Link>
                                    <Link as={NavLink} to={LOGIN_ROUTE}>
                                        <AiOutlineLogout style={{width: 30, height: 30}}/>
                                    </Link>
                                </Box>
                                :
                                <Link as={NavLink} to={LOGIN_ROUTE}>
                                    <AiOutlineLogin style={{width:30, height: 30}}/>
                                </Link>
                            }
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;