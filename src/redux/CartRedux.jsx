import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:JSON.parse(localStorage.getItem("cart")) || [],
        quantity: JSON.parse(localStorage.getItem("cart.quantity")) || 0,
        total: JSON.parse(localStorage.getItem("cart.total")) || 0,
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
        //remove all
        removeAllProduct: (state, action) =>{
            state.products = []
            // localStorage.clear();
            localStorage.removeItem("cart");
            localStorage.removeItem("cart.quantity");
            localStorage.removeItem("cart.total");
        }
    },
})

export const { addProduct, removeAllProduct } = cartSlice.actions
export default cartSlice.reducer