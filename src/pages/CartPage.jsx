// src/pages/CartPage.jsx

import React from 'react';
import { useCart } from '../context/CartContext';  // Importation correcte de useCart

const CartPage = () => {
    const { cart, removeFromCart, getTotal } = useCart();  // Utilisation du hook useCart

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    return (
        <div>
            <h1>Panier</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}€
                        <button onClick={() => handleRemoveFromCart(item.id)}>Retirer</button>
                    </li>
                ))}
            </ul>

            <h3>Total: {getTotal()}€</h3>
        </div>
    );
};

export default CartPage;