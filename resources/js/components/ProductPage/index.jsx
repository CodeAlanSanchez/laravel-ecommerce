import React, { useState, useEffect } from "react";
import axios from "axios";

const index = ({ match, location }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const {
        params: { productId },
    } = match;

    const fetchProduct = (id) => {
        axios.get("/api/products/" + id).then((response) => {
            setProduct(response.data.product);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchProduct(productId);
    }, []);

    return (
        <div>
            {loading ? (
                <>
                    <p>Loading...</p>
                </>
            ) : (
                <div className="productPage">
                    <div className="image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="info">
                        <h2>
                            {product.name}
                            {user?.id == product.user_id ? (
                                <span>
                                    &nbsp;
                                    <a
                                        href={`/product/${productId}/edit`}
                                        className="link"
                                    >
                                        Edit Product
                                    </a>
                                </span>
                            ) : (
                                ""
                            )}
                        </h2>
                        {product.discount > 0 ? (
                            <p className="price">
                                <span className="price old">
                                    ${product.price}
                                </span>
                                &nbsp; ${product.discount}
                            </p>
                        ) : (
                            <p className="price">${product.price}</p>
                        )}
                        <button className="primary cart disabled" type="button">
                            Add To Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default index;
