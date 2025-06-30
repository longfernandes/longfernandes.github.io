// src/redux/authReducer.js
import { LOGIN, LOGOUT } from "./authActions";

const initialState = {
  user: null,
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
