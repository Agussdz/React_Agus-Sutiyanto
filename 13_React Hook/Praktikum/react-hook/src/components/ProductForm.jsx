// ProductForm.jsx
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import article from "../data/article";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import ProductInputForm from "./ProductInputForm";
import TableProduct from "./TableProduct";

export default function ProductForm() {
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
  });
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [isIndonesian, setIsIndonesian] = useState(false);

  useEffect(() => {
    alert("Welcome");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {
      name:
        errorMessage.name ||
        (productName.length === 0 ? "Please enter a valid product name." : ""),
      category:
        productCategory.length === 0 ? "Category must be selected." : "",
      price: productPrice <= 0 ? "Price must be greater than 0." : "",
    };

    setErrorMessage(errors);

    if (!Object.values(errors).some((error) => error)) {
      const newProduct = {
        id: editProductId || uuidv4(),
        name: productName,
        category: productCategory,
        freshness: document.querySelector(
          'input[name="productFreshness"]:checked'
        )?.value,
        price: productPrice,
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
    setErrorMessage({ name: "", category: "", image: "", price: "" });
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

  const toggleLanguage = () => {
    setIsIndonesian(!isIndonesian);
  };

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="CreateP-Tittle d-flex justify-content-center align-items-center flex-column">
            <img src={bootstrapLogo} alt="Bootstrap Logo" />
            <h3 className="mt-3">
              {isIndonesian ? article.title.id : article.title.en}
            </h3>
            <p className="text-center col-md-11">
              {isIndonesian ? article.description.id : article.description.en}
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 mt-4">
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={toggleLanguage}>
              {isIndonesian ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => console.log(Math.floor(Math.random() * 100))}
            >
              Generate Random Number
            </button>
          </div>
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
