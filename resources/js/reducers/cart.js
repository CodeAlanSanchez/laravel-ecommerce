export default (cart = [], action) => {
    switch (action.type) {
        case "FETCH_CART":
            return cart;
        case "ADD_PRODUCT":
            let inArray = cart.find((i) => i.id === action.payload.id);
            let amount = 1;

            if (inArray > 0) {
                cart.map((i) => {
                    if (i.id === action.payload.id) {
                        console.log("ITEM FOUND!!!");
                        amount = i.amount += 1;
                    }
                });
            }
            console.log("ITEM NOT FOUND!!!");

            return [...cart, { ...action.payload, amount }];
        case "REMOVE_PRODUCT":
            return cart.filter((item) => item.id !== action.payload.id);
        default:
            return cart;
    }
};
