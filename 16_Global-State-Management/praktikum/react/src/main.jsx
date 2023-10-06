import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./utils/redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
