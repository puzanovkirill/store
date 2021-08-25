import React from 'react';
import {Box, Input, InputGroup, Select, InputLeftAddon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";

const Filter = () => {

    return (
        <Box d='flex' w='100%' justifyContent='space-around' flexDirection={{
            xl: 'row',
            md: 'row',
            lg: 'row',
            sm:'column',
            base: 'column'
            }
        }
        >
            <Box d='flex' w={
                {
                    xl:'18rem',
                    lg: '15rem',
                    md: '12rem',
                    sm: '100%'
                }
            }>
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineSearch />} />
                    <Input
                        placeholder='Search'
                        variant="outline"

                    />
                </InputGroup>
            </Box>
            <Select
                placeholder='Choose type'
                // ml='50px'
                w={
                    {
                        xl:'18rem',
                        lg: '15rem',
                        md: '12rem',
                        sm: '100%'

                    }
                }
                style={
                    {
                        cursor: 'pointer'
                    }
                }
            >
                <option>opt1</option>
                {/*{productStore.types.map(type =>*/}
                {/*    <option key={type.id}>{type.name}</option>*/}
                {/*)}*/}
            </Select>
            <Select
                placeholder='Choose brand'
                // ml='50px'
                w={
                    {
                        xl:'18rem',
                        lg: '15rem',
                        md: '12rem',
                        sm: '100%'

                    }
                }
                style={
                    {
                        cursor: 'pointer'
                    }
                }
            >
                <option>opt1</option>
                {/*{productStore.brands.map(brand =>*/}
                {/*    <option key={brand.id}>{brand.name}</option>*/}
                {/*)}>*/}
            </Select>
        </Box>
    );
};

export default Filter;