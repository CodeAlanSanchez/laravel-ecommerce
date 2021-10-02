export const fetchCart = () => async (dispatch) => {
    try {
        dispatch({ action: "FETCH_CART" });
    } catch (error) {
        console.error(error);
    }
};

export const addProduct = (data) => async (dispatch) => {
    try {
        dispatch({ action: "ADD_PRODUCT", payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const removeProduct = (id) => async (dispatch) => {
    try {
        dispatch({ action: "REMOVE_PRODUCT", payload: id });
    } catch (error) {
        console.error(error);
    }
};
