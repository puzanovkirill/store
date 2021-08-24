import {$authHost, $host} from "./index";

export const fetchCategories = async () => {
    const {data} = await $host.get('api/categories');
    return data;
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get(`api/categories/${id}`);
    return data;
}

export const fetchProducts = async (categoryId, page, limit) => {
    const {data} = await $host.get(
        'api/products',
        {
            params: {
                categoryId,
                page,
                limit
            }
        }
        );
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get(`api/product/${id}`);
    return data;
}