import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const index = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );

    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/sale">
                        SALE
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact={true} to="/">
                        SHOP
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/orders">
                        ORDERS
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/cart">
                        CART
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/account">
                        {user?.email ? "ACCOUNT" : "LOGIN / REGISTER"}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default index;
