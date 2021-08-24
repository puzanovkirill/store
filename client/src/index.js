import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./stores/UserStore";
import ProductStore from "./stores/ProductStore";
import {createBreakpoints} from "@chakra-ui/theme-tools";
import CartStore from "./stores/CartStore";
import UserProvider from "./stores/UserStore";
import CartProvider from "./stores/CartStore";
import ProductProvider from "./stores/ProductStore";

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
  }}>
      <ProductProvider>
          <CartProvider>
              <UserProvider>
                  <App />
              </UserProvider>
          </CartProvider>
      </ProductProvider>
  </Context.Provider>,
  document.getElementById('root')
);
