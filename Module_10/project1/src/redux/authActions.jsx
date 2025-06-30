// src/redux/authActions.js
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (accessToken, user) => ({
    type: LOGIN,
    payload: { accessToken, user },
});

export const logout = () => ({
    type: LOGOUT,
});
