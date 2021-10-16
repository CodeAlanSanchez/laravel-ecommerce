import React from "react";

const index = ({ product }) => {
    return (
        <div className="cartItem">
            <img src={product.image} alt={product.name} style={{}} />
            <h5>{product.name}</h5>
            {product.discount > 0 ? (
                <p className="price">
                    <span className="price old">${product.price}</span>
                    &nbsp; ${product.discount}
                </p>
            ) : (
                <p className="price">${product.price}</p>
            )}
            <p>x {product.amount}</p>
        </div>
    );
};

export default index;
