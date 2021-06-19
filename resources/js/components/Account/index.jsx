import React from "react";

const index = () => {
    return (
        <div className="account">
            <h1 className="heading">Account</h1>
            <h3 className="productsHeading">Your Products</h3>
            <div className="account-info">
                <h4 className="name subheading">Name</h4>
                <h6 className="name">Alan</h6>
                <h4 className="email subheading">Email</h4>
                <h6 className="email">someone@gmail.com</h6>
                <button className="sm primary">Log Out</button>
            </div>
            <div className="products">
                <div className="product">
                    <h3>T-Shirt</h3>
                </div>
            </div>
        </div>
    );
};

export default index;
