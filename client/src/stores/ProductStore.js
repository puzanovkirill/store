import { createContext, useContext, useMemo, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const contextValue = useMemo(
    () => [product, setProduct],
    [product, setProduct]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}

export default ProductProvider;
