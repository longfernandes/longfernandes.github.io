import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const exists = state.cartItems.find((i) => i.id === item.id);
            if (exists) {
                exists.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload
            );
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find((i) => i.id === id);
            if (item) item.quantity = quantity;
        },
        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
