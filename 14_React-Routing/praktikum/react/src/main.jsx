import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/App.jsx";
import { CreateProduct } from "./pages/create-product.jsx";
// import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateProduct />
  </React.StrictMode>
);
