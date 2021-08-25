import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import img from '../assets/default-product.png';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({id, name, price}) => {
    const history = useHistory();
    return (
        <Box
            w='300px'
            minH='350px'
            onClick={() => history.push(`${PRODUCT_ROUTE}/${id}`)}
            shadow='lg'
            borderRadius='lg'
            cursor='pointer'
            transition='all 0.3s'
            _hover={{
                transform: 'translateY(-15px)'
            }
            }
        >
            <Image src={img} w='250px' h='250px' m='auto'/>
            <Box d='flex' flexDirection='column' textAlign='center'>
                <Box>{name}</Box>
                <Box>{price} $</Box>
            </Box>
        </Box>
    );
};

export default ProductItem;