import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartState from "./context/cart/cartState";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartState>
        <Provider store={store}>
          <App />
        </Provider>
      </CartState>
    </BrowserRouter>
  </React.StrictMode>
);
