import React from "react";

const index = ({ product }) => {
    return (
        <a className="product" href="/product">
            <div className="image">
                <img className="image" src={product.image} alt={product.name} />
            </div>
            <div>
                <p className="name">{product.name}</p>
                <p className="price">${product.price}</p>
            </div>
        </a>
    );
};

export default index;
