import React from "react";
import bootstrapLogo from "../assets/bootstrap-logo.png";

export default function ProductForm() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="CreateP-Tittle d-flex justify-content-center align-items-center flex-column">
            <img src={bootstrapLogo} alt="Bootstrap Image" />
            <h3 className="mt-3">Create Product</h3>
            <p className="text-center col-md-11">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
        </div>
        <div className="col-md-5 mt-4">
          <h5>Detail Product</h5>
          <div id="alertPlaceholder"></div>
          <form id="productForm">
            <div className="mb-3 col-md-8">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                minLength="6"
                maxLength="50"
                className="form-control"
                id="productName"
              />
            </div>
            <div className="mb-3 col-md-7">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                id="productCategory"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
                <option value="Category3">Category 3</option>
              </select>
            </div>
            <div className="mb-3 col-md-5">
              <label htmlFor="productImage" className="form-label">
                Image of Product
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control border-primary text-primary"
                  id="productImage"
                />
              </div>
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
              />
            </div>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <button type="submit" className="btn btn-primary col-md-12">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
