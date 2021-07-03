import React, { useState } from "react";
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
                console.log(response);
                history.go(0);
            })
            .catch((error) => console.error(error));
    };

    const handleFile = (fileList) => {
        setForm({ ...form, image: fileList[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postForm();
    };

    return (
        <div className="productForm">
            <h5 align="center">Add Product</h5>
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
                <input
                    type="file"
                    value={form.image}
                    onChange={(e) => handleFile(e.target.files)}
                    name="image"
                    placeholder="Image"
                />
                <button className="sm primary outline" type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default index;
