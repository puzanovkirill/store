import React, {useEffect, useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import {fetchProductsFiltered} from "../http/productAPI";
import {useCategory} from "../stores/CategoryStore";
import {useProduct} from "../stores/ProductStore";
import {useCurrentCategory} from "../stores/CurrentCategory";
import {useCurrentBrand} from "../stores/CurrentBrand";

const Content = (props) => {
    const [currentBrand,] = useCurrentBrand();
    const [currentCategory, setCurrentCategory] = useCurrentCategory();
    const [, setProduct] = useProduct();
    const styles = {
        marginLeft: '40px'
    }
    useEffect(() => {
        try {
            fetchProductsFiltered(currentCategory.id, currentBrand.id).then((data) => setProduct(data));
        } catch (e) {
        }
    }, [currentCategory]);
    return (
        <div style={styles}>
            <div className="label"
                 style={{cursor: 'pointer'}}
                 onClick={() => {
                     setCurrentCategory(props.props);
                     console.log(currentCategory, currentBrand);
                 }}>
                {props.props.name}
            </div>
        </div>);
}

const Group = (props) => {
    const [currentBrand,] = useCurrentBrand();
    const [currentCategory, setCurrentCategory] = useCurrentCategory();
    const [isOpened, setIsOpened] = useState(false);
    const p = props;
    const [, setProduct] = useProduct();
    useEffect(() => {
        try {
            fetchProductsFiltered(currentCategory.id, currentBrand.id).then((data) => setProduct(data));
        } catch (e) {
        }
    }, [currentCategory]);
    const styles = {
        marginLeft: '20px'
    }
    return (
        <div>
            <div className="config" style={styles}>
                <div className="label"
                     style={{cursor: 'pointer'}}
                     onClick={(e) => {
                         e.preventDefault();
                         setCurrentCategory(p.categoryItem);
                     }}>
                    {p.categoryItem.name}
                    <input
                        className="input"
                        type="checkbox"
                        checked={isOpened}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        onChange={({target: {checked}}) => setIsOpened(checked)}
                    />
                </div>
            </div>
            <Collapse isOpened={isOpened} hasNestedCollapse>
                {p.categoryItem.children.map(item => {
                    if (item.children) {
                        return <Group key={item.name} props={item}/>
                    } else return <Content key={item.name} props={item}/>
                })}
                {}
            </Collapse>
        </div>
    );
}

const CategoriesMenu = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [category] = useCategory();
    const [, setProduct] = useProduct();
    const [, setCurrentCategory] = useCurrentCategory({id:undefined});
    return (
        <div>
            <div className="config">
                <label
                    className="label"
                    onClick={(e) => e.preventDefault()}
                >
                    Choose categories
                    <input
                        className="input"
                        type="checkbox"
                        checked={isOpened}
                        onClick={(e) => e.stopPropagation()}
                        onChange={({target: {checked}}) => {
                            setIsOpened(checked);
                            if (!checked) {
                                setCurrentCategory();
                                fetchProductsFiltered().then((data) => setProduct(data));
                            }
                        }}

                    />
                </label>
            </div>
            <Collapse isOpened={isOpened} hasNestedCollapse>
                {category.map((item) => {
                    if (item.parentId == null) {
                        return <Group key={item.name} categoryItem={item}/>;
                    }
                })}
            </Collapse>
        </div>
    );
}

export default CategoriesMenu;