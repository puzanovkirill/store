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
            h='350px'
            mt='20px'
            onClick={() => history.push(`${PRODUCT_ROUTE}/id`)}
        >
            <Image src={img} w='250px' h='250px'/>
            <Box d='flex' flexDirection='column'>
                <Box>Price</Box>
                <Box>Name</Box>
            </Box>
        </Box>
    );
};

export default ProductItem;