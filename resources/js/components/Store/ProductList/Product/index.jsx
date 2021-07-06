import React from "react";

const index = ({ product }) => {
    return (
        <a className="product" href={`/product/${product.id}`}>
            {console.log(product)}
            <div className="image">
                <img
                    className="image"
                    src={`${product.image}`}
                    alt={product.name}
                />
            </div>
            <div>
                <p className="name">{product.name}</p>

                {product.discount > 0 ? (
                    <p className="price">
                        <span className="price old">${product.price}</span>
                        &nbsp; ${product.discount}
                    </p>
                ) : (
                    <p className="price">${product.price}</p>
                )}
            </div>
        </a>
    );
};

export default index;
