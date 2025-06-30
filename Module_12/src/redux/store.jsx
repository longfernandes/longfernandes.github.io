import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { userReducer } from "react";

export const store = createStore(userReducer, applyMiddleware(thunk));