import React from "react";
import Product from "./Product";

const index = () => {
    return (
        <div className="productList">
            <Product
                product={{
                    name: "Ruby Dress",
                    price: "3.99",
                    image: "google.com",
                }}
            ></Product>
            <Product
                product={{
                    name: "Black T-Shirt Cotton Button Up Shirt",
                    price: "7.99",
                    image: "google.com",
                }}
            ></Product>
            <Product
                product={{
                    name: "Ruby Dress",
                    price: "3.99",
                    image: "google.com",
                }}
            ></Product>
        </div>
    );
};

export default index;
