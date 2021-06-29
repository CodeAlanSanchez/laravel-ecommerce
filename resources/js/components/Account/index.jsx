import React, { useState, useEffect } from "react";
import Product from "../Store/ProductList/Product";
import AccountForm from "./AccountForm";

const index = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

    if (!user?.email) {
        return <AccountForm />;
    }

    return (
        <div className="account">
            <div className="account-info">
                <h1 className="account-heading">Account</h1>
                <h4 className="name subheading">Name</h4>
                <h6 className="name">{user?.name}</h6>
                <h4 className="email subheading">Email</h4>
                <h6 className="email">{user?.email}</h6>
                <button className="sm primary">Log Out</button>
            </div>
            <div className="account-products">
                <h1 className="products-heading">Your Products</h1>
                <div className="products">
                    <Product
                        product={{
                            name: "t-shirt",
                            price: 3.99,
                            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dmhj_kaUiOor-V2S-gqCwQHaLH%26pid%3DApi&f=1",
                        }}
                    ></Product>
                </div>
            </div>
        </div>
    );
};

export default index;
