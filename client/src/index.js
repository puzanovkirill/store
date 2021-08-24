import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./stores/UserStore";
import ProductStore from "./stores/ProductStore";
import {createBreakpoints} from "@chakra-ui/theme-tools";
import CartStore from "./stores/CartStore";
import UserProvider from "./stores/UserStore";

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
      productStore: new ProductStore(),
      cartStore: new CartStore()
  }}>
      <UserProvider>
          <App />
      </UserProvider>

  </Context.Provider>,
  document.getElementById('root')
);
