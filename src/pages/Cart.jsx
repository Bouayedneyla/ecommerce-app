import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Prix: ${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Retirer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
