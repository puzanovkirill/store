import React, {useState} from 'react';
import {Box, Input, InputGroup, Select, InputLeftAddon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {useCategory} from "../stores/CategoryStore";
import {fetchProductsByCategory} from "../http/productAPI";
import {useProduct} from "../stores/ProductStore";
import {useBrand} from "../stores/BrandStore";

const Filter = () => {
    const [category] = useCategory();
    const [brand] = useBrand();
    const [product, setProduct] = useProduct();
    const [categoryItem, setCategoryItem] = useState();
    const [categoryId, setCategoryId] = useState();
    const handleOnChange = () => {
        category.map(item => {
            if(item.name === categoryItem)
                setCategoryId(item.id);
        });
            fetchProductsByCategory(categoryId).then(data => console.log(data,));
    }
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
                onChange={e => {setCategoryItem(e.target.value); handleOnChange()}}
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
                {brand.map(item =><option key={item.id}>{item.name}</option>)}

            </Select>
        </Box>
    );
};

export default Filter;