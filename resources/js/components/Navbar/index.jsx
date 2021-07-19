import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
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
                        LOGIN / REGISTER
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default index;
