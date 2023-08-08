import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./Contexts/ProductsContext/ProductsProvider";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import WishlistProvider from "./Contexts/Wishlist/WishlistProvider";
import CartProvider from "./Contexts/Cart/CartProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
