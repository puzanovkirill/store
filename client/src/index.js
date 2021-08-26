import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from "./stores/UserStore";
import CartProvider from "./stores/CartStore";
import ProductProvider from "./stores/ProductStore";
import CategoryProvider from "./stores/CategoryStore";
import BrandProvider from "./stores/BrandStore";

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
  }}>
      <BrandProvider>
          <CategoryProvider>
              <ProductProvider>
                  <CartProvider>
                      <UserProvider>
                          <App />
                      </UserProvider>
                  </CartProvider>
              </ProductProvider>
          </CategoryProvider>
      </BrandProvider>
  </Context.Provider>,
  document.getElementById('root')
);
