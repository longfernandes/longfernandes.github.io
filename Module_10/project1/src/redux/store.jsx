import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        menu: menuReducer,
    },
});

export default store;
