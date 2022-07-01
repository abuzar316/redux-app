import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from "redux";

import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
});

const persistConfig = { key: 'key', storage }

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer
});


export default store;