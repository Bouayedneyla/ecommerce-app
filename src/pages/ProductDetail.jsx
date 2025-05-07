import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetails.css';
const products = [
  { 
      id: 1, 
      name: 'Bague en or', 
      description: 'Bague fine en or 18k', 
      price: 5000, 
      image: '/images/téléchargement.jpeg' 
  },
  { 
      id: 2, 
      name: 'Collier en diamant', 
      description: 'Collier serti de diamants avec chaîne en argent', 
      price: 15000, 
      image: '/images/collier.jpeg' 
  },
  { 
      id: 3, 
      name: 'Bracelet en argent', 
      description: 'Bracelet en argent massif ajustable', 
      price: 2000, 
      image: '/images/bracelet.jpeg' 
  },

  { 
      id: 4, 
      name: 'Bague en or', 
      description: 'Bague fine en or 18k', 
      price: 5000, 
      image: '/images/téléchargement.jpeg' 
  },
  { 
      id: 5, 
      name: 'Collier en diamant', 
      description: 'Collier serti de diamants avec chaîne en argent', 
      price: 15000, 
      image: '/images/collier.jpeg' 
  },
  { 
      id: 6, 
      name: 'Bracelet en argent', 
      description: 'Bracelet en argent massif ajustable', 
      price: 2000, 
      image: '/images/bracelet.jpeg' 
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="error-message">Produit non trouvé</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price.toLocaleString()} €</p>
        <button 
          onClick={() => addToCart(product)}
          className="add-to-cart-btn"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;