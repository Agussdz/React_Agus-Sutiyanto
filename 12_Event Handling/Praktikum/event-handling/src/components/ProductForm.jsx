// ProductForm.jsx
import React, { useState } from "react";
import article from "../data/article";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import ProductInputForm from "./ProductInputForm";

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

  const [isIndonesian, setIsIndonesian] = useState(false);

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {
      name:
        errorMessage.name ||
        (productName.length === 0 ? "Please enter a valid product name." : ""),
      category:
        productCategory.length === 0 ? "Category must be selected." : "",
      image: !productImage ? "Image must be uploaded." : "",
      price: productPrice <= 0 ? "Price must be greater than 0." : "",
    };

    setErrorMessage(errors);

    if (!Object.values(errors).some((error) => error)) {
      alert("Form submitted successfully!");
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
              onClick={handleButtonClick}
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
        </div>
      </div>
    </>
  );
}
