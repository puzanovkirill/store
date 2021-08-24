// export default class CartStore{
//     constructor() {
//         this._ids = [1, 2];
//     }
//
//     addProduct(id) {
//        return this._ids.push(id);
//     }
//
//     deleteProduct(id){
//         return this._ids = this._ids.filter(item => {
//             return item !== id;
//         });
//     }
//
//     get ids(){
//         return this._ids;
//     }
// }
import {createContext, useContext, useMemo, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] =  useState();
    const contextValue = useMemo(
        () => [cart, setCart],
        [cart, setCart],
    );

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}

export default  CartProvider;