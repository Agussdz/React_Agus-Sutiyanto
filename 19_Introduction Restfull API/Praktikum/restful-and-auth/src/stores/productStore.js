import { create } from "zustand";
import axios from "axios";

const API_URL = "https://6726fbb4302d03037e6eec8e.mockapi.io/product";

const useStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await axios.get(API_URL);
    set({ products: response.data });
  },
  addProduct: async (product) => {
    const response = await axios.post(API_URL, product);
    set((state) => ({
      products: [...state.products, response.data],
    }));
  },
  updateProduct: async (updatedProduct) => {
    const response = await axios.put(
      `${API_URL}/${updatedProduct.id}`,
      updatedProduct
    );
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? response.data : product
      ),
    }));
  },
  deleteProduct: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
}));

export default useStore;
