import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import useStore from "../stores/productStore";

jest.mock("../stores/productStore");

describe("CreateProduct Component", () => {
  const addProductMock = jest.fn();

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    useStore.mockReturnValue({
      products: [],
      addProduct: addProductMock,
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    });
  });

  test("should accept input for Product Name and display it in Product List", () => {
    render(<CreateProduct />);

    // Fill in the product name input
    const productNameInput = screen.getByLabelText(/product name/i);
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });

    // Fill in other required fields to make the form valid
    const productCategorySelect = screen.getByLabelText(/product category/i);
    fireEvent.change(productCategorySelect, { target: { value: "Category1" } });

    const productImageInput = screen.getByLabelText(/image of product/i);
    fireEvent.change(productImageInput, {
      target: { files: [new File([""], "image.png", { type: "image/png" })] },
    });

    const productFreshnessRadio = screen.getByLabelText(/brand new/i);
    fireEvent.click(productFreshnessRadio);

    const productPriceInput = screen.getByLabelText(/product price/i);
    fireEvent.change(productPriceInput, { target: { value: "10" } });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Assert that addProduct was called with the correct arguments
    expect(addProductMock).toHaveBeenCalledWith(
      expect.objectContaining({
        productName: "Test Product",
        productCategory: "Category1",
        productFreshness: "New",
        productPrice: "10",
      })
    );
  });
});
