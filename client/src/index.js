import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from "./stores/UserStore";
import CartProvider from "./stores/CartStore";
import ProductProvider from "./stores/ProductStore";
import CategoryProvider from "./stores/CategoryStore";

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
  }}>
      <CategoryProvider>
          <ProductProvider>
              <CartProvider>
                  <UserProvider>
                      <App />
                  </UserProvider>
              </CartProvider>
          </ProductProvider>
      </CategoryProvider>

  </Context.Provider>,
  document.getElementById('root')
);
