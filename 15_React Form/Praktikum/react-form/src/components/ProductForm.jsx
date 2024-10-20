import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/CreateProduct.css";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import ProductInputForm from "./ProductInputForm";
import TableProduct from "./TableProduct";

export default function ProductForm({ products, setProducts }) {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    freshness: "",
  });
  const [editProductId, setEditProductId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const freshness = document.querySelector(
      'input[name="productFreshness"]:checked'
    )?.value;

    // Regex untuk validasi
    const nameRegex = /^[A-Za-z0-9\s]+$/; // Hanya huruf, angka, dan spasi
    const categoryOptions = ["Category1", "Category2", "Category3"];
    const priceRegex = /^[0-9]*\.?[0-9]+$/; // Angka positif

    const errors = {
      name: !nameRegex.test(productName)
        ? "Product Name must contain only letters, numbers, and spaces."
        : productName.length === 0
        ? "Please enter a valid product name."
        : "",
      category: !categoryOptions.includes(productCategory)
        ? "Please select a valid category."
        : "",
      image: productImage ? "" : "Please upload an image.",
      price:
        !priceRegex.test(productPrice) || productPrice <= 0
          ? "Price must be a positive number."
          : "",
      freshness: !freshness ? "Please select product freshness." : "",
    };

    setErrorMessage(errors);

    if (!Object.values(errors).some((error) => error)) {
      const newProduct = {
        id: editProductId || uuidv4(),
        name: productName,
        category: productCategory,
        freshness: freshness,
        price: productPrice,
        image: productImage,
      };

      if (editProductId) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editProductId ? newProduct : product
          )
        );
      } else {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }

      resetForm();
    }
  };

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductImage(null);
    setProductPrice("");
    setAdditionalDescription("");
    setErrorMessage({
      name: "",
      category: "",
      image: "",
      price: "",
      freshness: "",
    });
    setEditProductId(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setProductName(productToEdit.name);
      setProductCategory(productToEdit.category);
      setProductPrice(productToEdit.price);
      setEditProductId(id);
    }
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="CreateP-Tittle d-flex justify-content-center align-items-center flex-column">
            <img src={bootstrapLogo} alt="Bootstrap Logo" />
            <h3 className="mt-3">Create Product</h3>
            <p className="text-center col-md-11">
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
          <ProductInputForm
            productName={productName}
            setProductName={setProductName}
            productCategory={productCategory}
            setProductCategory={setProductCategory}
            productImage={productImage}
            setProductImage={setProductImage}
            productPrice={productPrice}
            setProductPrice={setProductPrice}
            additionalDescription={additionalDescription}
            setAdditionalDescription={setAdditionalDescription}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />

          <TableProduct
            products={products}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}
