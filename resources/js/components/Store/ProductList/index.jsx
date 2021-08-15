import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const index = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        await axios
            .get("/api/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="productList">
            {!loading ? (
                products?.length > 0 ? (
                    products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))
                ) : (
                    <p>No products currently in stock...</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default index;
