import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";

const index = () => {
    return (
        <div className="store">
            <h6 className="shopHeader">Products</h6>
            {/* <Category /> */}
            <ProductList />
        </div>
    );
};

export default index;
