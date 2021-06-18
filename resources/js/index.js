import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Account from "./components/Account";
import Support from "./components/Support";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import "../css/app.css";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/support" component={Support} />
                <Route path="/orders" component={Orders} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
