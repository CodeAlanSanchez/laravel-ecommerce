export const fetchCart = () => async (dispatch) => {
    try {
        const data = JSON.parse(localStorage.getItem("cart"));

        dispatch({ type: "FETCH_CART", payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const addProduct = (data) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_PRODUCT", payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const removeProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
    } catch (error) {
        console.error(error);
    }
};
