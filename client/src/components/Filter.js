import React, {useEffect, useState} from "react";
import {
    Box,
    Input,
    InputGroup,
    Select,
    InputLeftAddon
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {useCategory} from "../stores/CategoryStore";
import {useProduct} from "../stores/ProductStore";
import {useBrand} from "../stores/BrandStore";
import {fetchProductsFiltered, fetchSearch} from "../http/productAPI";
import CategoriesMenu from "./CategoriesMenu";
import {useCurrentBrand} from "../stores/CurrentBrand";
import {useCurrentCategory} from "../stores/CurrentCategory";

const Filter = () => {
    const [currentBrand, setCurrentBrand] = useCurrentBrand();
    const [currentCategory] = useCurrentCategory();
    const [category] = useCategory();
    const [brand,] = useBrand();
    const [, setProduct] = useProduct();
    const [categoryItem,] = useState();
    const [brandItem, setBrandItem] = useState();
    useEffect(() => {
        brand.forEach((item) => {
            if (item.name === brandItem) {
                setCurrentBrand(item);
            }
        });
        try {
            fetchProductsFiltered(currentCategory.id, currentBrand.id).then((data) => setProduct(data));
        } catch(e) {
        }
    }, [brandItem, currentBrand]);
    console.log(currentCategory, currentBrand)
    function transformData() {
        const nonGroupsArray = [];
        category.forEach(item => {
            if (item.parentId !== null) nonGroupsArray.push(item);
        });
        category.forEach(item => {
            if (item.parentId === null) {
                item.children = [];
                nonGroupsArray.forEach(nonGroupItem => {
                    if (nonGroupItem.parentId == item.id) {
                        item.children.push(nonGroupItem);
                    }
                });
            }
        })
    }

    transformData();

    return (
        <Box
            d="flex"
            w="100%"
            justifyContent="space-around"
            flexDirection={{
                xl: "row",
                md: "row",
                lg: "row",
                sm: "column",
                base: "column",
            }}
        >
            <Box
                d="flex"
                w={{
                    xl: "18rem",
                    lg: "15rem",
                    md: "12rem",
                    sm: "100%",
                }}
            >
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineSearch/>}/>
                    <Input
                        placeholder="Search"
                        variant="outline"
                        onChange={(e) =>
                            fetchSearch(e.target.value).then((data) => setProduct(data))
                        }
                    />
                </InputGroup>
            </Box>

            <CategoriesMenu/>

            <Select
                onChange={(e) => {
                    setBrandItem(e.target.value);
                    if(e.target.value === ""){
                        setCurrentBrand({id:undefined});
                        fetchProductsFiltered().then((data) => setProduct(data));
                    }
                }}
                placeholder="Choose brand"
                w={{
                    xl: "18rem",
                    lg: "15rem",
                    md: "12rem",
                    sm: "100%",
                }}
                style={{
                    cursor: "pointer",
                }}
            >
                {brand.map((item) => (
                    <option key={item.id}>{item.name}</option>
                ))}
            </Select>
        </Box>
    );
};

export default Filter;