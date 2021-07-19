import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";

const index = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const [form, setForm] = useState({
        name: "",
        price: "",
        discount: "",
        image: "",
        category: "",
    });

    const postForm = async () => {
        await axios
            .post("/api/products", form, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                history.go(0);
            })
            .catch((error) => console.error(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postForm();
    };

    return (
        <div className="productForm">
            <h4 align="center">Add Product</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Product Name"
                />
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    value={form.price}
                    onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                    }
                    name="price"
                    placeholder="Price"
                />
                <label htmlFor="discount">Discount</label>
                <input
                    type="text"
                    value={form.discount}
                    onChange={(e) =>
                        setForm({ ...form, discount: e.target.value })
                    }
                    name="discount"
                    placeholder="Discount"
                />
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    value={form.category}
                    onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                    }
                    name="category"
                    placeholder="Category"
                />
                <label htmlFor="image">Image</label>
                <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setForm({ ...form, image: base64 })}
                ></FileBase64>
                <button className="sm secondary rounded" type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default index;
