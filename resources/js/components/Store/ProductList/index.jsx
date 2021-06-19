import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const index = () => {
    const [products, setProducts] = useState({});

    const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

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
