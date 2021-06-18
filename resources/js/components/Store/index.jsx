import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";

const index = () => {
    return (
        <div className="store">
            <Category />
            <ProductList />
        </div>
    );
};

export default index;
