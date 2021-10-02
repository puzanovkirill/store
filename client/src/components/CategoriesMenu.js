import React, {useEffect, useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import {fetchProductsFiltered} from "../http/productAPI";
import {useCategory} from "../stores/CategoryStore";
import {useProduct} from "../stores/ProductStore";


const Content = (props) => {
    const [product, setProduct] = useProduct();
    const [categoryItem, setCategoryItem] = useState({});
    const styles = {
        marginLeft: '40px'
    }
    useEffect(() => {
        fetchProductsFiltered(categoryItem.id).then((data) => setProduct(data));
    }, [categoryItem]);
    return (
        <div style={styles}>
            <div className="label"
                 onClick={() => {
                     setCategoryItem(props.props);
                     if(Object.keys(categoryItem).length !== 0)
                     fetchProductsFiltered(categoryItem.id).then((data) => setProduct(data));
                 }}>
                {props.props.name}
            </div>
        </div>);
}

const Group = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const p = props;
    const [product, setProduct] = useProduct();
    const [categoryItem, setCategoryItem] = useState({});
    useEffect(() => {
        fetchProductsFiltered(categoryItem.id).then((data) => setProduct(data));
    }, [categoryItem]);
    const styles = {
        marginLeft: '20px'
    }
    return (
        <div>
            <div className="config" style={styles}>
                <div className="label" onClick={(e) => {
                    e.preventDefault();
                    setCategoryItem(p.categoryItem);
                    if(Object.keys(categoryItem).length !== 0)
                    fetchProductsFiltered(categoryItem.id).then((data) => setProduct(data));
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
    const [product, setProduct] = useProduct();
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
                            if(!checked){
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