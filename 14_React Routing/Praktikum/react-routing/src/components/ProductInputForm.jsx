// ProductInputs.jsx
import React from "react";

export default function ProductInputForm({
  productName,
  setProductName,
  productCategory,
  setProductCategory,
  productImage,
  setProductImage,
  productPrice,
  setProductPrice,
  additionalDescription,
  setAdditionalDescription,
  handleSubmit,
  errorMessage,
  setErrorMessage,
}) {
  const handleNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.length > 25) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "Product Name must not exceed 25 characters.",
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        name: "",
      }));
    }
  };
  return (
    <form id="productForm" onSubmit={handleSubmit}>
      <div className="mb-3 col-md-8">
        <label htmlFor="productName" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          minLength="1"
          maxLength="50"
          className={`form-control ${errorMessage.name ? "is-invalid" : ""}`}
          id="productName"
          value={productName}
          onChange={handleNameChange}
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
          className={`form-select ${errorMessage.category ? "is-invalid" : ""}`}
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
          className={`form-control ${errorMessage.image ? "is-invalid" : ""}`}
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
              name="productFreshness"
              id="BrandNew"
              value="New"
            />
            <label className="form-check-label" htmlFor="BrandNew">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="SecondHand"
              value="Second"
            />
            <label className="form-check-label" htmlFor="SecondHand">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="productFreshness"
              id="Refurbished"
              value="Refurbish"
            />
            <label className="form-check-label" htmlFor="Refurbished">
              Refurbished
            </label>
          </div>
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
          value={additionalDescription}
          onChange={(e) => setAdditionalDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-5 col-md-12">
        <label htmlFor="productPrice" className="form-label">
          Product Price
        </label>
        <input
          type="number"
          className={`form-control ${errorMessage.price ? "is-invalid" : ""}`}
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
    </form>
  );
}
