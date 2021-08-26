import React from 'react';
import {Box, Input, InputGroup, Select, InputLeftAddon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {useCategory} from "../stores/CategoryStore";

const Filter = () => {
    const [category] = useCategory();

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
                {category.map(item =><option key={item.id}>{item.name}</option>)}
            </Select>
            <Select
                placeholder='Choose brand'
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