import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./utils/redux/store.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
