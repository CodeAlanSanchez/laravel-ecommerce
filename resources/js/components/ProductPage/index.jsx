import React, { useState, useEffect } from "react";
import { addProduct } from "../../actions/cart";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const index = ({ match, location }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const {
        params: { productId },
    } = match;

    const fetchProduct = (id) => {
        axios.get("/api/products/" + id).then((response) => {
            setProduct(response.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchProduct(productId);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addProduct(product));
        history.push("/cart");
    };

    return (
        <div>
            {loading ? (
                <div className="flex" style={{ height: "1vh" }}>
                    <h2>Loading...</h2>
                </div>
            ) : (
                <div className="productPage">
                    <div className="image">
                        <img src={product.image} alt="" />
                    </div>
                    <form className="info" onSubmit={(e) => handleSubmit(e)}>
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
                        <button className="primary cart" type="submit">
                            Add To Cart
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default index;
