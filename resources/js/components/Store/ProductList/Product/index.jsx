import React from "react";

const index = ({ product }) => {
    return (
        <a className="product" href="/product">
            <img className="image" src={product.image} alt={product.name} />
            <p className="name">{product.name}</p>
            <p className="price">${product.price}</p>
        </a>
    );
};

export default index;
