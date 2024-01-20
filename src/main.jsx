import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { Provider } from 'react-redux';

import { CartProvider } from './contexts/cart.context.jsx';
import { CatagoriesProvider } from './contexts/catagories.context.jsx';
import './index.scss';
import { store } from './store/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CatagoriesProvider>
            <CartProvider>
              <App/>
            </CartProvider>
          </CatagoriesProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
