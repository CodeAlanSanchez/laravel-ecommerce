import React, { useEffect } from "react";
import Store from "../Store";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../actions/cart";

const index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, []);

    return (
        <div>
            <Store />
        </div>
    );
};

export default index;
