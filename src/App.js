import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockAPI from "./Mockman";

// pages import
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import RequiresAuth from "./Contexts/AuthContext/RequiresAuth";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import OrderSummary from "./pages/summary/OrderSummary";
import Confirm from "./pages/confirmation/Confirm";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
        {/* page routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/summary"
          element={
            <RequiresAuth>
              <OrderSummary />
            </RequiresAuth>
          }
        />
                <Route
          path="/paymentconfirmation/:paymentId"
          element={
            <RequiresAuth>
              <Confirm />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
