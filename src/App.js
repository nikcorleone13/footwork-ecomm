import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockAPI from "./Mockman";


// pages import
import Home from './pages/home/Home';
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
        {/* page routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
