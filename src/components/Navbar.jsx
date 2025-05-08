import React from 'react';
import { Link } from 'react-router-dom';
// On suppose un contexte CartContext (ou un hook useCart) pour les articles du panier
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Navbar() {
  // On récupère le tableau des articles du panier depuis un contexte global (par ex. CartContext)
  const { cartItems } = useContext(CartContext);  
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow">
      {/* Logo / nom du site */}
      <div className="text-2xl font-bold">
        <Link to="/">Perle Rare</Link>
      </div>
      {/* Liens de navigation */}
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/cart" className="hover:underline">Panier</Link>
        {/* Compteur d'articles */}
        <span className="ml-2 px-2 py-1 bg-red-500 text-white rounded-full">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
