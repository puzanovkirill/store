import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import img from '../assets/default-product.png';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = () => {
    const history = useHistory();
    return (
        <Box
            w='300px'
            minH='350px'
            onClick={() => history.push(`${PRODUCT_ROUTE}`)}
            shadow='lg'
            borderRadius='lg'
        >
            <Image src={img} w='250px' h='250px' m='auto'/>
            <Box d='flex' flexDirection='column' textAlign='center'>
                <Box>Price</Box>
                <Box>Name</Box>
            </Box>
        </Box>
    );
};

export default ProductItem;