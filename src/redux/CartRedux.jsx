import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:JSON.parse(localStorage.getItem("cart")) || [],
        quantity: JSON.parse(localStorage.getItem("cart.quantity")) || 0,
        total: JSON.parse(localStorage.getItem("cart.total")) || 0,
        order: JSON.parse(localStorage.getItem("order")) || []
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
            state.quantity = 0
            state.total = 0
            localStorage.removeItem("cart");
            localStorage.removeItem("cart.quantity");
            localStorage.removeItem("cart.total");
        },
        //Add order
        addOrder: (state, action) =>{
            state.order = {"paymentInfo" : action.payload, "orderedProduct" : state.products}
            localStorage.setItem('order', JSON.stringify(state.order))
        },
       
        //Remove Order
        removeOrder: (state, action) =>{
            state.products = []
            state.quantity = 0
            state.total = 0
            localStorage.removeItem("order");
        }
    },
})

export const { addProduct,  removeAllProduct, addOrder , removeOrder} = cartSlice.actions
export default cartSlice.reducer
