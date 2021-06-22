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
        <div className="account formContainer">
            <h2>Register</h2>
            <form action="" className="accountForm">
                <label className="required" htmlFor="name">
                    Name
                </label>
                <br />
                <input
                    name="name"
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <br />
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
                <label className="required" htmlFor="passwordConfirmation">
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
                <button className="primary" type="submit">
                    Register
                </button>
                <button className="sm center link text">
                    Already registered? Log in
                </button>
            </form>
        </div>
    );
};

export default index;
