import { createContext, useContext, useMemo, useState } from 'react';

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState();
  const contextValue = useMemo(() => [brand, setBrand], [brand, setBrand]);

  return (
    <BrandContext.Provider value={contextValue}>
      {children}
    </BrandContext.Provider>
  );
};

export function useBrand() {
  return useContext(BrandContext);
}

export default BrandProvider;
