import React, {useEffect, useState} from "react";
import {
    Box,
    Input,
    InputGroup,
    Select,
    InputLeftAddon, Menu, MenuList, MenuItem, MenuButton, Button,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {useCategory} from "../stores/CategoryStore";
import {useProduct} from "../stores/ProductStore";
import {useBrand} from "../stores/BrandStore";
import {fetchProductsFiltered, fetchSearch} from "../http/productAPI";
import CategoriesMenu from "./CategoriesMenu";

const Filter = () => {
    const [category] = useCategory();
    const [brand, setBrand] = useBrand();
    const [product, setProduct] = useProduct();
    const [categoryItem, setCategoryItem] = useState();
    const [brandItem, setBrandItem] = useState();
    let categoryId;
    let brandId;
    useEffect(() => {
        category.map((item) => {
            if (item.name === categoryItem) {
                categoryId = item.id;
            }
        });
        brand.map((item) => {
            if (item.name === brandItem) {
                brandId = item.id;
            }
        });
        fetchProductsFiltered(categoryId, brandId).then((data) => setProduct(data));
    }, [categoryItem, brandItem]);
    function transformData() {
        const nonGroupsArray = [];
        category.forEach(item => {
            if(item.parentId !== null) nonGroupsArray.push(item);
        });
        category.forEach(item => {
            if(item.parentId === null){
                item.children = [];
                nonGroupsArray.forEach(nonGroupItem => {
                    if(nonGroupItem.parentId == item.id) {
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

            <CategoriesMenu />

            {/*<Select
                placeholder="Choose type"
                onChange={(e) => {
                    setCategoryItem(e.target.value);
                }}
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
                {category.map((item) =>
                {if(item.parentId === null) return <option key={item.name}>{item.name}</option>   }
                )}
            </Select>*/}
            <Select
                onChange={(e) => {
                    setBrandItem(e.target.value);
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