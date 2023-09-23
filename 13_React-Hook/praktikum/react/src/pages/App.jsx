import { useEffect } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx";
import CreateProduct from "./createProduct.jsx";

function App() {
  useEffect(() => {
    alert("WELCOME");
  }, []);
  return (
    <div>
      <Header />
      <CreateProduct />
    </div>
  );
}

export default App;
