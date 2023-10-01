import { useEffect } from "react";
import swal from "sweetalert";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx";
import CreateProduct from "./createProduct.jsx";
import LandingPage from "./landingPage";
import ProductDetail from "./productDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "src/utils/redux/store";

function App() {
  useEffect(() => {
    swal("WELCOME");
  }, []);

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <div>
          <Header />
        </div>

        <Router>
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/product" element={<ProductDetail />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>,
    document.getElementById("root")
  );
}

export default App;
