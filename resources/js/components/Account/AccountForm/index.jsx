import React, { useState } from "react";

const index = () => {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
    });
    const [register, setRegister] = useState(true);

    return (
        <div className="formContainer">
            <div className="accountForm">
                <h2>{register ? "Register" : "Log In"}</h2>
                <form action="POST" className="form">
                    {register ? (
                        <>
                            <label className="required" htmlFor="name">
                                Name
                            </label>
                            <br />
                            <input
                                name="name"
                                id="name"
                                type="text"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                            <br />
                        </>
                    ) : (
                        ""
                    )}
                    <label className="required" htmlFor="email">
                        Email
                    </label>
                    <br />
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
                    <br />
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
                                htmlFor="passwordConfirmation"
                            >
                                Confirm Password
                            </label>
                            <br />
                            <input
                                name="passwordConfirmation"
                                id="passwordConfirmation"
                                type="text"
                                value={form.passwordConfirmation}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        passwordConfirmation: e.target.value,
                                    })
                                }
                            />
                        </>
                    ) : (
                        ""
                    )}

                    <button className="primary" type="submit">
                        Register
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
