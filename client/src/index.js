import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./stores/UserStore";
import ProductStore from "./stores/ProductStore";
import {createBreakpoints} from "@chakra-ui/theme-tools";

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
      userStore: new UserStore(),
      productStore: new ProductStore()
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);
