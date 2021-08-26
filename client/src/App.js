import React, {useEffect, useState} from 'react';
import {Center, ChakraProvider, Flex, Spinner} from "@chakra-ui/react"
import Navbar from "./components/Navbar.js";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {fetchCategories, fetchProducts} from "./http/productAPI";
import {useProduct} from "./stores/ProductStore";
import {useCategory} from "./stores/CategoryStore";

function App() {
    const [product, setProduct] = useProduct();
    const [category, setCategory] = useCategory();
    const [loading, setLoading] = useState(true);
    const handlePromise = () => {
        if(!product){
            fetchProducts().then(data => setProduct(data))
        }
        if(!category) {
            fetchCategories().then(data => setCategory(data));
        }
        if(product && category) setLoading(false)
    }
    useEffect(() => {
        handlePromise();
    });

    if(loading){
        return <Flex justifyContent='center' w='100%' h='100%' mt='10%'>
            <Spinner
                w='50vh'
                h='50vh'
                thickness="10px"
                speed="1s"
                emptyColor="#F2F2F2"
                color="#805AD5"
                size="xl"

            />
        </Flex>

    }
    return (
    <ChakraProvider>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </ChakraProvider>
  );

}

export default App;
