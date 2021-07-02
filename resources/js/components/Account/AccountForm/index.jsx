import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const index = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [register, setRegister] = useState(true);
    const [account, setAccount] = useState({});
    const history = useHistory();

    const signup = async () => {
        await axios
            .post("/api/register", form)
            .then((response) => {
                setUser({ ...response.data.user, token: response.data.token });
                history.go(0);
            })
            .catch((error) => console.error(error));
    };

    const signin = async () => {
        await axios
            .post("/api/login", form)
            .then((response) => {
                setUser({ ...response.data.user, token: response.data.token });
                history.go(0);
            })
            .catch((error) => console.error(error));
    };

    const setUser = (user) => {
        localStorage.setItem("profile", JSON.stringify({ ...user }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (register) {
            signup();
        } else {
            signin();
        }
    };

    return (
        <div className="formContainer">
            <div className="accountForm">
                <h2>{register ? "Register" : "Log In"}</h2>
                <form className="form" onSubmit={(e) => onSubmit(e)}>
                    {register ? (
                        <>
                            <label className="required" htmlFor="name">
                                Name
                            </label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                        </>
                    ) : (
                        ""
                    )}
                    <label className="required" htmlFor="email">
                        Email
                    </label>
                    <input
                        name="email"
                        id="email"
                        type="text"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                    <label className="required" htmlFor="password">
                        Password
                    </label>
                    <input
                        name="password"
                        id="password"
                        type="text"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />
                    {register ? (
                        <>
                            <label
                                className="required"
                                htmlFor="password_confirmation"
                            >
                                Confirm Password
                            </label>
                            <input
                                name="password_confirmation"
                                id="password_confirmation"
                                type="text"
                                value={form.password_confirmation}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password_confirmation: e.target.value,
                                    })
                                }
                            />
                        </>
                    ) : (
                        ""
                    )}

                    <button className="primary" type="submit">
                        {register ? "Register" : "Log In"}
                    </button>
                    <button
                        className="sm center link text"
                        type="button"
                        onClick={() => setRegister((prev) => !prev)}
                    >
                        {register
                            ? "Already registered? Log in here"
                            : "Don't have an account? Register here"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default index;
