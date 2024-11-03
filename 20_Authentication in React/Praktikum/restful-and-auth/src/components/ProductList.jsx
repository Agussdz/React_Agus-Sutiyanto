import React from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/productStore";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="table-responsive mt-4">
      <h4>Product List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>
                <Link to={`/product-detail/${product.id}`}>{index + 1}</Link>
              </td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.image}
                    style={{ width: "50px" }}
                  />
                ) : (
                  <span className="text-secondary">No image uploaded</span>
                )}
              </td>
              <td>{product.productFreshness}</td>
              <td>${product.productPrice}</td>
              <td>
                <button
                  className="btn btn-danger px-2 mx-2"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary px-2"
                  onClick={() => onEdit(product.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
