import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./components/ProductForm";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/create-product"
          element={
            <ProductForm products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/product-detail/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
