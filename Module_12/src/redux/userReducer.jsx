const initialState = {
    loading: false,
    user: null,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_USER_SUCCESS":
            return { ...state, loading: false, user: action.payload };
        case "FETCH_USER_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};