import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Product from "../Store/ProductList/Product";
import AccountForm from "./AccountForm";
import ProductForm from "../Store/ProductForm";
import decode from "jwt-decode";

const index = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    if (!user?.email) {
        return <AccountForm />;
    }

    const fetchProducts = async () => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/${user?.id}/products`, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setProducts(response.data.products);
                console.info(response.data.products);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                localStorage.setItem("profile", JSON.stringify("{}"));
                history.go(0);
            }
        }
        fetchProducts();
    }, []);

    const handleLogout = () => {
        localStorage.setItem("profile", JSON.stringify("{}"));
        history.go(0);
    };

    return (
        <div className="account">
            <div className="account-info">
                <h1 className="account-heading">Account</h1>
                <h4 className="name subheading">Name</h4>
                <h6 className="name">{user?.name}</h6>
                <h4 className="email subheading">Email</h4>
                <h6 className="email">{user?.email}</h6>
                <button
                    className="sm outline secondary"
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    Log Out
                </button>
            </div>
            <div className="account-products">
                <h1 className="products-heading">Your Products</h1>
                <div className="products">
                    <ProductForm />
                    {!isLoading ? (
                        // products.map((product) => (
                        //     <Product key={product.id} product={product} />
                        // ))
                        console.log(products)
                    ) : (
                        <h4>Loading...</h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default index;
