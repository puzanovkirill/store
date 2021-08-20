export default class CartStore{
    constructor() {
        this._ids = [1, 2];
    }

    addProduct(id) {
        this._ids.push(id);
    }

    deleteProduct(id){
        return this._ids = this._ids.filter(item => {
            return item !== id;
        });
    }

    get ids(){
        return this._ids;
    }
}