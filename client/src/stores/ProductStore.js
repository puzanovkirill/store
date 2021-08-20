export default class ProductStore{
    constructor() {
        this._types = [
            {id:1, name: 'Smartphones'},
            {id:2, name: 'Laptops'},
            {id:3, name:'Smart watches'}
        ];
        this._brands = [
            {id:1, name: 'Apple'},
            {id:2, name: 'Samsung'},
            {id:3, name:'Xiaomi'}
        ];
        this._products = [
            {id: 0, name: 'name1', price: 111111 },
            {id: 1, name: 'name2', price: 111111 },
            {id: 2, name: 'name3', price: 111111 },
            {id: 3, name: 'name4', price: 111111 },
            {id: 4, name: 'name5', price: 111111 },
            {id: 5, name: 'name6', price: 111111 },
            {id: 6, name: 'name7', price: 111111 },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
    }

    setTypes(types){
        this._types = types;
    };
    setBrands(brands){
        this._brands= brands;
    };
    setDevices(products){
        this._products= products;
    };
    setSelectedType(type){
        this._selectedType = type;
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand;
    }
    get types() {
        return this._types;
    };
    get brands() {
        return this._brands;
    };
    get products() {
        return this._products;
    };
    get selectedType(){
        return this._selectedType;
    }
    get selectedBrand(){
        return this._selectedBrand;
    }
}