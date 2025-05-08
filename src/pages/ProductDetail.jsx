// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Produit introuvable</div>;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-48 h-48 mb-4 rounded shadow" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-4">{product.price} €</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ajouter au panier

