import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Changer Switch par Routes
import { CartProvider } from './context/CartContext';  // Importation de CartProvider
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />  {/* Ajouter Navbar ici */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;