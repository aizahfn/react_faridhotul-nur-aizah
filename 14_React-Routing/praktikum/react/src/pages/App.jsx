import { useEffect } from "react";
import swal from "sweetalert";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/Header.jsx";
import CreateProduct from "./createProduct.jsx";
import LandingPage from "./landingPage";
import ProductDetail from "./productDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    swal("WELCOME");
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
