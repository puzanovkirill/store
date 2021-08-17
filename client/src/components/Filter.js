import React from 'react';
import {Box, Input, InputGroup, Select, InputLeftAddon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {MdAddShoppingCart} from "react-icons/all";

const Filter = () => {
    return (
        <Box d='flex' w='100%' justifyContent='space-around'>
            <Box d='flex'>
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineSearch />} />
                    <Input leftIcon={<MdAddShoppingCart />} placeholder='Search' variant="outline" w='300px'/>
                </InputGroup>
            </Box>
            <Select placeholder='Choose type' ml='50px' w='300px' style={{cursor: 'pointer'}}>
                <option value='option1'>some option</option>
                <option value='option2'>some option</option>
                <option value='option3'>some option</option>
                <option value='option4'>some option</option>
            </Select>
            <Select placeholder='Choose brand' ml='50px' w='300px' style={{cursor: 'pointer'}}>
                <option value='option1'>some option</option>
                <option value='option2'>some option</option>
                <option value='option3'>some option</option>
                <option value='option4'>some option</option>
            </Select>
        </Box>
    );
};

export default Filter;