import axios from "axios";
import React, { useState, useEffect } from "react";

const index = ({ match, location }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        discount: "",
        category: "",
    });
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const {
        params: { productId },
    } = match;

    const fetchProducts = async () => {
        await axios
            .get("/api/products")
            .then((response) => {
                setProduct(
                    response.data.filter((product) => product.id == productId)
                );
                setForm({
                    name: product?.name,
                    price: product?.price,
                    discount: product?.discount,
                    category: product?.category,
                });
                setLoading(false);
            })
            .catch((error) => console.error(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch(`/api/products/${product.id}`, form, {
            headers: { Authorization: `Bearer ${user?.token}` },
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="edit">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="productForm">
                    <h4 align="center">Edit Product</h4>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
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
                        <button type="submit" className="sm primary">
                            Update Product
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default index;
