// src/redux/store.js
import { createStore, combineReducers } from "redux";
import authReducer from "./authReducer"; // Import authReducer
import cartReducer from "./cartReducer"; // Import cartReducer

const rootReducer = combineReducers({
  auth: authReducer,  // Combine authReducer
  cart: cartReducer,  // Combine cartReducer
});

const store = createStore(rootReducer);

export default store;
