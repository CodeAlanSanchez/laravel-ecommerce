export default (cart = [], action) => {
    switch (action.type) {
        case "FETCH_CART":
            return action.payload;
        case "ADD_PRODUCT":
            const item = cart.find(({ id }) => id === action.payload.id);
            let products = [];

            if (typeof item !== "undefined") {
                products = cart.map((i) =>
                    i.id === item.id
                        ? { ...action.payload, key: i.id, amount: i.amount + 1 }
                        : i
                );
                localStorage.setItem("cart", JSON.stringify(products));
            } else {
                products = [...cart, { ...action.payload, amount: 1 }];
                localStorage.setItem("cart", JSON.stringify(products));
            }

            return products;
        case "REMOVE_PRODUCT":
            return cart.filter((item) => item.id !== action.payload.id);
        default:
            return cart;
    }
};
