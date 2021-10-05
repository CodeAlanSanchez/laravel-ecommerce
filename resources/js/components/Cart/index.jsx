import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { fetchCart } from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart);
    }, []);

    return (
        <div className="flex">
            <div className="cart">
                <h6 className="shopHeader">Cart</h6>
                {cart.length > 0 ? (
                    <div className="cartItems">
                        {cart.map((i) => (
                            <CartItem key={i.id} product={i}></CartItem>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty...</p>
                )}
            </div>
        </div>
    );
};

export default index;
