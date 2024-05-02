import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Countries from './features/Countries/Countries';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Products from './features/products/Products';
import CountryDetails from './features/Countries/CountryDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/countries',
            element: <Countries></Countries>,
            children: [
                  {
                      path: '/countries/details/:name',
                      element: <CountryDetails></CountryDetails>,
                  },
            ]
        },
        {
            path: '/products',
            element: <Products></Products>,
        },
        
      ]
    },
  ]);

root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
