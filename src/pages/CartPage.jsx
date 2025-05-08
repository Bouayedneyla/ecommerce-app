import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Votre panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="mb-2 border-b pb-2">
            <p>{item.name}</p>
            <p>{item.price}€</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
