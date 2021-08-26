import { $host } from './index';

export const fetchCartItems = async () => {
  let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
  const { data } = await $host.get('api/cart', config);
  return data;
};

export const addCartItem = async (id) => {
  let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
  const { data } = await $host.post('api/cart/add-item', { id }, config);
  return data;
};

export const removeCartItem = async (id) => {
  let config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
  const { data } = await $host.post('api/cart/remove-item', { id }, config);
  return data;
};
