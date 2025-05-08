import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav className="p-4 bg-purple-600 text-white flex justify-between">
          <Link to="/" className="font-bold text-xl">Perle Rare</Link>
          <Link to="/cart" className="bg-white text-purple-600 px-4 py-1 rounded">Voir mon panier</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
