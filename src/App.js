import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<MainPage onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} onRemove={handleRemoveFromCart} />} />
      </Routes>
    </Router>
  );
}
