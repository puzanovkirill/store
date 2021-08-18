import React, {useContext} from 'react';
import {Box, Input, InputGroup, Select, InputLeftAddon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {MdAddShoppingCart} from "react-icons/all";
import {Context} from "../index";

const Filter = () => {
    const {productStore} = useContext(Context);
    console.log(productStore);
    return (
        <Box d='flex' w='100%' justifyContent='space-around'>
            <Box d='flex'>
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineSearch />} />
                    <Input leftIcon={<MdAddShoppingCart />} placeholder='Search' variant="outline" w='300px'/>
                </InputGroup>
            </Box>
            <Select placeholder='Choose type' ml='50px' w='300px' style={{cursor: 'pointer'}}>
                {productStore.types.map(type =>
                    <option key={type.id}>{type.name}</option>
                )}
            </Select>
            <Select placeholder='Choose brand' ml='50px' w='300px' style={{cursor: 'pointer'}}>
                {productStore.brands.map(brand =>
                    <option key={brand.id}>{brand.name}</option>
                )}>
            </Select>
        </Box>
    );
};

export default Filter;