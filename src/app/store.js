import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../services/countries";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from "../services/products";



export const store = configureStore({
    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})


setupListeners(store.dispatch)