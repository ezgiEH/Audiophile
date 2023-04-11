import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: JSON.parse(localStorage.getItem("cart")) || [],
        quantity: JSON.parse(localStorage.getItem("cart.quantity")) || 0,
        total: JSON.parse(localStorage.getItem("cart.total")) || 0,
        order: JSON.parse(localStorage.getItem("order")) || []
    },
    reducers: {
        //add cart
        addProduct: (state, action) => {
            action.payload.id = nanoid()
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
            localStorage.setItem('cart', JSON.stringify(state.products));
            localStorage.setItem('cart.quantity', JSON.stringify(state.quantity));
            localStorage.setItem('cart.total', JSON.stringify(state.total));
        },
        //Update Product
        decProduct: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)
            if (item.quantity >= 1) {
                item.quantity = --item.quantity
                state.total -= item.price
                localStorage.setItem('cart.total', JSON.stringify(state.total));
            } else if (item.quantity === 0) {
                item.quantity -= 1
                state.quantity -= 1
                state.products = state.products.filter(item => item.id !== action.payload.id)
                localStorage.setItem('cart', JSON.stringify(state.products));
                localStorage.setItem('cart.quantity', JSON.stringify(state.quantity));
            }
        },
        incProduct: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)
            item.quantity += 1
            localStorage.setItem('cart', JSON.stringify(state.products));
            state.total += item.price
            localStorage.setItem('cart.total', JSON.stringify(state.total));
        },
        //remove all
        removeAllProduct: (state, action) => {
            state.products = []
            state.quantity = 0
            state.total = 0
            localStorage.removeItem("cart");
            localStorage.removeItem("cart.quantity");
            localStorage.removeItem("cart.total");
        },
        //Add order
        addOrder: (state, action) => {
            state.order = { "paymentInfo": action.payload, "orderedProduct": state.products }
            localStorage.setItem('order', JSON.stringify(state.order))
        },

        //Remove Order
        removeOrder: (state, action) => {
            state.products = []
            state.quantity = 0
            state.total = 0
            localStorage.removeItem("order");
        }
    },
})

export const { addProduct, removeAllProduct, decProduct, incProduct, addOrder, removeOrder } = cartSlice.actions
export default cartSlice.reducer
