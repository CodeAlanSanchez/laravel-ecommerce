import React, { useEffect, useState } from "react";
import Product from "../Store/ProductList/Product";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../actions/cart";

const index = () => {
    const dispatch = useDispatch();
    const [onSale, setOnSale] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        await axios
            .get("/api/products")
            .then((response) => {
                setOnSale(
                    response.data.filter((product) => product.discount > 0)
                );
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchProducts();
        dispatch(fetchCart());
    }, []);

    return (
        <div className="sale">
            <h6 className="shopHeader">Discounted Products</h6>
            <div className="productList">
                {!loading ? (
                    onSale.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default index;
