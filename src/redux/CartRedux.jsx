import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:JSON.parse(localStorage.getItem("cart")) || [],
        quantity: JSON.parse(localStorage.getItem("cart.quantity")) || 0,
        total: JSON.parse(localStorage.getItem("cart.total")) || 0,
        order: JSON.parse(localStorage.getItem("cart.order")) || []
    },
    reducers: {
        //add cart
        addProduct: (state,action) =>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
            localStorage.setItem('cart', JSON.stringify(state.products));
            localStorage.setItem('cart.quantity', JSON.stringify(state.quantity));
            localStorage.setItem('cart.total', JSON.stringify(state.total));
        },
        updateProduct:(state,action)=>{
            state.products.quantity = action.payload
        },
        //remove all
        removeAllProduct: (state, action) =>{
            state.products = []
            state.quantity = 0
            state.total = 0
            // localStorage.clear();
            localStorage.removeItem("cart");
            localStorage.removeItem("cart.quantity");
            localStorage.removeItem("cart.total");
        },
        //payment
        payment: (state, action) =>{
            state.order = (action.payload)
            localStorage.setItem('order', JSON.stringify(state.order))
        }
    },
})

export const { addProduct, updateProduct, removeAllProduct, payment } = cartSlice.actions
export default cartSlice.reducer