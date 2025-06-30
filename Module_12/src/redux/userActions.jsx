export const fetchUser = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_USER_REQUEST"});

        try {
            const res =  await new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Joe Doe", age: 30 }), 1500)
            );

            dispatch({ type: "FETCH_USER_SUCCESS", payload: res});

        } catch (error) {
            dispatch({ type: "FETCH_USER_FAILURE", payload: "Lỗi kết nối API"});
        }
    };
};