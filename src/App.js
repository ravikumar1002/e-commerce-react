import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import ProductsPage from "./pages/products/products-combine-page";
import WishlistPage from "./pages/wishlist/wishlsit";
import LoginPage from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import SignUpPage from "./pages/signup/signup";
import CartPage from "./pages/cart/cart";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
