export default class CartStore{
    constructor() {
        this._ids = [1, 2];
    }

    addProduct(id) {
        this._ids.push(id);
    }

    deleteProduct(id){
        this._ids.splice(this._ids.indexOf(id),1);
    }

    get ids(){
        return this._ids;
    }
}