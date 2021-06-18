import React, { useState } from "react";
import { Link } from "react-router-dom";

const index = () => {
    return (
        <nav className="">
            <ul className="">
                <li className="">
                    <Link activeClassName="active" to="/sale">
                        SALE
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName="active" to="/">
                        SHOP
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName="active" to="/orders">
                        ORDERS
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName="active" to="/cart">
                        CART
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName="active" to="/account">
                        LOGIN / REGISTER
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default index;
