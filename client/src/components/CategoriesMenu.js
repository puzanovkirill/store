import React, {useEffect, useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import {fetchProductsFiltered} from "../http/productAPI";
import {useCategory} from "../stores/CategoryStore";
import {useBrand} from "../stores/BrandStore";
import {useProduct} from "../stores/ProductStore";

const Content = (props) => {
    const [category] = useCategory();
    const [product, setProduct] = useProduct();
    const [categoryItem, setCategoryItem] = useState();
    let categoryId;
    useEffect(() => {
        category.forEach((item) => {
            if (item.name === categoryItem) {
                categoryId = item.id;
            }
            console.log(categoryId)
        });
        fetchProductsFiltered(categoryId).then((data) => setProduct(data));
    }, [categoryItem, categoryId]);
    return (
        <div>
            <div className="label"
                 onClick={() => {
                     setCategoryItem(props.props.name);
                 }}>
                {props.props.name}
            </div>
        </div>);
}

/*class Content extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const p = this.props;
        return (
            <div>
                <div className="label">
                    {p.props.name}
                </div>
            </div>
        );
    }
}*/

class Group extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    render() {
        const {isOpened} = this.state;
        const p = this.props;
        return (
            <div>
                <div className="config">
                    <div className="label">
                        {p.props.name}
                        <input
                            className="input"
                            type="checkbox"
                            checked={isOpened}
                            onChange={({target: {checked}}) =>
                                this.setState({isOpened: checked})
                            }
                        />
                    </div>
                </div>
                <Collapse isOpened={isOpened} hasNestedCollapse>
                    {p.props.children.map(item => {
                        if (item.children) {
                            return <Group  key={item.name} props={item}/>
                        } else return <Content key={item.name} props={item}/>
                    })}
                    {}
                </Collapse>
            </div>
        );
    }
}

class CategoriesMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    render() {
        const {isOpened} = this.state;
        const p = this.props;
        return (
            <div>
                <div className="config">
                    <label
                        className="label"
                        onClick={(e) => e.preventDefault()}
                    >
                        Filter
                        <input
                            className="input"
                            type="checkbox"
                            checked={isOpened}
                            onClick={(e) => e.stopPropagation()}
                            onChange={({target: {checked}}) =>
                                this.setState({isOpened: checked})
                            }
                        />
                    </label>
                </div>
                <Collapse isOpened={isOpened} hasNestedCollapse>
                    {p.props.map((item) => {
                        if (item.parentId === null) {
                            return <Group key={item.name} props={item}/>;
                        }
                    })}
                </Collapse>
            </div>
        );
    }
}

export default CategoriesMenu;