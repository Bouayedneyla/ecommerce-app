// src/pages/CartPage.jsx

import React from 'react';
import { useCart } from '../context/CartContext';  // Importation correcte de useCart
import '../styles/CartPage.css';



const CartPage = () => {
    const { cart, removeFromCart, getTotal } = useCart();

    return (
        <div className="cart-page">
            <h1>Votre Panier</h1>
            
            <ul className="cart-list">
                {cart.map((item) => (
                    <li className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">{item.price} DZD</span>
                        </div>
                        <button 
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Retirer
                        </button>
                    </li>
                ))}
            </ul>

            <div className="total-section">
                <h3>
                    Total : 
                    <span className="total-price">{getTotal()} DZD</span>
                </h3>
                <button className="checkout-btn">
                    Passer la commande
                </button>
            </div>
        </div>
    );
};

export default CartPage;