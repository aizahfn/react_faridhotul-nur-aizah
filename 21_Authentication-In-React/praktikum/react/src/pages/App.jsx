import { useEffect } from "react";
import swal from "sweetalert";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx";
import CreateProduct from "./createProduct.jsx";
import LandingPage from "./landingPage";
import ProductDetail from "./productDetail";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    swal("WELCOME");
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/product" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
