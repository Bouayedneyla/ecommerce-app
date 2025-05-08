// src/context/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Création du contexte du panier
const CartContext = createContext();

// Création du provider pour encapsuler les composants et fournir le contexte du panier
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

// Utilisation du hook useCart pour accéder facilement au contexte
export const useCart = () => {
    return useContext(CartContext);  // Accéder à CartContext via le hook useContext
};
