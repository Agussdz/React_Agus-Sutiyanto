import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../stores/productStore";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useStore();
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
          <h2>{product.productName}</h2>
        </div>
        <div className="card-body">
          <p>Category: {product.productCategory}</p>{" "}
          <p>Freshness: {product.productFreshness}</p>
          <p>Price: ${product.productPrice}</p>{" "}
          {product.image && (
            <img
              src={URL.createObjectURL(product.image)}
              alt={product.image.name}
              style={{ width: "550px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
