import {$host} from "./index";

export const fetchCartItems = async () => {
    const {data} = await $host.get('api/cart');
    return data;
}

export const addCartItem = async (id) => {
    const {data} = await $host.post('api/cart/add-item', {id});
    return data;
}