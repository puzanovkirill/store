import React, { useState} from 'react';
import {Box, Button, Container, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useUser} from "../stores/UserStore";
import {login, registration} from "../http/userAPI";
import {useCart} from "../stores/CartStore";
import {fetchCartItems} from "../http/cartAPI";

const Auth = () => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [setCart] = useCart();


    const [setUser] = useUser();

    const handleClick = async () => {
        let data;
        if(isLogin)
            data =await login(email, password);
        else
            data = await registration(firstName, lastName, email, password, passwordConfirmation);
        setUser(data);
        fetchCartItems().then(data => setCart(data));
        history.push(HOME_ROUTE);
    }
    return (
            <Container
                maxW="container.md"
                minH    ='300px'
                shadow='lg'
                borderRadius='lg'
                mt={
                    {
                        xl: '100px',
                        md: '60px',
                        lg: '100px',
                        sm:'40px',
                        base: '10px'
                    }
                }
                    >
                    <FormControl
                 d='grid' gridTemplateColumns='repeat(1, 1fr)' gridGap={3}>
                        <Heading textAlign='center'>{isLogin ? 'Login' : 'Registration'}</Heading>
                        {isLogin ? '' :
                            <Box d='flex' justifyContent='space-between'>
                                <Box w='45%'>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type='text'
                                           onChange={e => setFirstName(e.target.value)}
                                    />
                                </Box>
                                <Box w='45%'>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type='text'
                                           onChange={e => setLastName(e.target.value)}
                                    />
                                </Box>
                            </Box>

                        }
                        <FormLabel>Email address</FormLabel>
                        <Input type="email"
                               onChange={e => setEmail(e.target.value)}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input type='password'
                               onChange={e => setPassword(e.target.value)}
                        />
                        {isLogin ? '' :
                        <Box>
                            <FormLabel>Password Confirmation</FormLabel>
                            <Input type='password'
                                   onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Box>
                        }
                        <Button
                            onClick={handleClick}
                        >
                            {isLogin ? 'Sign in' : 'Sign up '}
                        </Button>
                    <Box pb='12px'>{isLogin ?
                        <Box>Don't have an account? <NavLink to={REGISTRATION_ROUTE} style={{color: '#805AD5'}}>Sign up!</NavLink></Box>
                        :
                        <Box>Have an account? <NavLink to={LOGIN_ROUTE} style={{color: '#805AD5'}}>Sign in!</NavLink></Box>}
                    </Box>
                </FormControl>
            </Container>
    );
};

export default Auth;