import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "react-bootstrap";
import store from "src/utils/redux/store";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

const customRender = (component) => {
  return render(component, {
    wrapper: Providers,
  });
};

export * from "@testing-library/react";
export { customRender as Render };
