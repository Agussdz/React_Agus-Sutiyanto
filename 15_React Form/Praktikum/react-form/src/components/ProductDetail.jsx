import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>Nothing</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h5 className="card-title mb-3">Product Details</h5>
      <div className="card">
        <div className="card-header">
          <h2>{product.name}</h2>
        </div>
        <div className="card-body">
          <strong>Image Of Product</strong>
          <br />
          <img
            src={URL.createObjectURL(product.image)}
            alt={product.name}
            className="w-25 mb-2"
          />
          <p className="card-text">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="card-text">
            <strong>Freshness:</strong> {product.freshness}
          </p>
          <p className="card-text">
            <strong>Price:</strong> ${product.price}
          </p>
        </div>
        <div className="card-footer text-muted">
          <small>Product ID: {product.id}</small>
        </div>
      </div>
    </div>
  );
}
