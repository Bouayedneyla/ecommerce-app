import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Changer Switch par Routes
import { CartProvider } from './context/CartContext';  // Importation de CartProvider
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />  {/* Ajouter Navbar ici */}
                <Routes>  {/* Remplacer Switch par Routes */}
                    <Route path="/" element={<HomePage />} />  {/* Utilisation de 'element' au lieu de 'component' */}
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
