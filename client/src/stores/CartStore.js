import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const contextValue = useMemo(() => [cart, setCart], [cart, setCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
