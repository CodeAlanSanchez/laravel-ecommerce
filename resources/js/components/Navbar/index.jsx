import React from "react";
import { Link } from "react-router-dom";

const index = () => {
    return (
        <nav className="">
            <ul className="">
                <li className="">
                    <Link activeClassName to="/sale">
                        SALE
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName to="/">
                        SHOP
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName to="/orders">
                        ORDERS
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName to="/cart">
                        CART
                    </Link>
                </li>
                <li className="">
                    <Link activeClassName to="/account">
                        LOGIN / REGISTER
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default index;
