import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './stores/UserStore';
import CartProvider from './stores/CartStore';
import ProductProvider from './stores/ProductStore';
import CategoryProvider from './stores/CategoryStore';
import BrandProvider from './stores/BrandStore';

ReactDOM.render(
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
  </BrandProvider>,
  document.getElementById('root')
);
