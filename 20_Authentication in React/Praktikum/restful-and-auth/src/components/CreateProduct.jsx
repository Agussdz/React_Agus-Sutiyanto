import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/CreateProduct.css";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import ProductList from "./ProductList";
import useStore from "../stores/productStore";

export default function CreateProduct() {
  const { products, fetchProducts, addProduct, updateProduct, deleteProduct } =
    useStore();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    freshness: "",
  });
  const [editProductId, setEditProductId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const freshness = document.querySelector(
      'input[name="productFreshness"]:checked'
    )?.value;

    const errors = validateForm(
      productName,
      productCategory,
      productImage,
      productPrice,
      freshness
    );
    setErrorMessage(errors);

    if (!Object.values(errors).some((error) => error)) {
      const newProduct = {
        id: editProductId || uuidv4(),
        productName,
        productCategory,
        productFreshness: freshness,
        productPrice,
        image: productImage ? URL.createObjectURL(productImage) : "",
      };

      if (editProductId) {
        await updateProduct(newProduct);
        setSuccessMessage("Berhasil mengupdate product");
      } else {
        await addProduct(newProduct);
        setSuccessMessage("Berhasil membuat product");
      }

      resetForm();
    }
  };

  const validateForm = (name, category, image, price, freshness) => {
    const nameRegex = /^[A-Za-z0-9\s]+$/;
    const categoryOptions = ["Category1", "Category2", "Category3"];
    const priceRegex = /^[0-9]*\.?[0-9]+/;

    return {
      name: !nameRegex.test(name)
        ? "Product Name must contain only letters, numbers, and spaces."
        : name.length === 0
        ? "Please enter a valid product name."
        : "",
      category: !categoryOptions.includes(category)
        ? "Please select a valid category."
        : "",
      image: image ? "" : "Please upload an image.",
      price:
        !priceRegex.test(price) || price <= 0
          ? "Price must be a positive number."
          : "",
      freshness: !freshness ? "Please select product freshness." : "",
    };
  };

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductImage(null);
    setProductPrice("");
    setErrorMessage({
      name: "",
      category: "",
      image: "",
      price: "",
      freshness: "",
    });
    setEditProductId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      setSuccessMessage("Berhasil menghapus produk");
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setProductName(productToEdit.productName);
      setProductCategory(productToEdit.productCategory);
      setProductPrice(productToEdit.productPrice);
      setEditProductId(id);
      setProductImage(productToEdit.image);
    }
  };

  const handleChangeProductName = (e) => {
    const value = e.target.value;
    if (value.length <= 25) {
      setProductName(value);
    }
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="CreateP-Tittle d-flex justify-content-center align-items-center flex-column">
            <img src={bootstrapLogo} alt="Bootstrap Logo" />
            <h3 className="mt-3">Create Product</h3>
            <p className="text-center col-md-11 mt-2">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 mt-4">
          <form id="productForm" onSubmit={handleSubmit}>
            <div className="mb-3 col-md-8">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={handleChangeProductName}
              />
              {errorMessage.name && (
                <div className="text-danger">{errorMessage.name}</div>
              )}
            </div>
            <div className="mb-3 col-md-7">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
                <option value="Category3">Category 3</option>
              </select>
              {errorMessage.category && (
                <div className="text-danger">{errorMessage.category}</div>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="productImage" className="form-label">
                Image of Product
              </label>
              <input
                type="file"
                className="form-control"
                id="productImage"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
              {errorMessage.image && (
                <div className="text-danger">{errorMessage.image}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Product Freshness</label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="freshnessNew"
                    name="productFreshness"
                    value="New"
                  />
                  <label className="form-check-label" htmlFor="freshnessNew">
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="freshnessSecond"
                    name="productFreshness"
                    value="Second Hand"
                  />
                  <label className="form-check-label" htmlFor="freshnessSecond">
                    Second Hand
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="freshnessRefurbished"
                    name="productFreshness"
                    value="Refurbish"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="freshnessRefurbished"
                  >
                    Refurbished
                  </label>
                </div>
                {errorMessage.freshness && (
                  <div className="text-danger">{errorMessage.freshness}</div>
                )}
              </div>
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="additionalDescription" className="form-label">
                Additional Description
              </label>
              <textarea
                className="form-control"
                id="additionalDescription"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-5 col-md-12">
              <label htmlFor="productPrice" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="$ 1"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              {errorMessage.price && (
                <div className="text-danger">{errorMessage.price}</div>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <button type="submit" className="btn btn-primary col-md-12">
                Submit
              </button>
            </div>
            <div className="text-center">
              {" "}
              {successMessage && (
                <p
                  className={`text-${editProductId ? "primary" : "success"} ${
                    handleDelete ? "text-danger" : ""
                  }`}
                >
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <ProductList
            products={products}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}
