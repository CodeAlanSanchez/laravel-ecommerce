export default (cart = [], action) => {
    switch (action.type) {
        case "FETCH_CART":
            return action.payload;
        case "ADD_PRODUCT":
            console.log(cart);
            localStorage.setItem(
                "cart",
                JSON.stringify([...cart, action.payload])
            );

            return [...cart, action.payload];
        case "REMOVE_PRODUCT":
            return cart.filter((item) => item.id !== action.payload.id);
        default:
            return cart;
    }
};
