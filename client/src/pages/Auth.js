import React, {useContext, useState} from 'react';
import {Box, Button, Container, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {Context} from "../index";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useUser} from "../stores/UserStore";
import {login} from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useUser();

    const handleSubmit = async () => {
        const data = await login(email, password);
        setUser(data);
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
                        <FormLabel>Email address</FormLabel>
                        <Input type="email"
                               onChange={e => setEmail(e.target.value)}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input type='password'
                               onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            onClick={handleSubmit}
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