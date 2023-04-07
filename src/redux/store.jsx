import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartRedux";

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    }
})