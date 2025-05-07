// src/pages/HomePage.js

import React from 'react';
import ItemsCard from '../components/ItemCard';
import '../styles/Home.css';

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

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="page-title">Nos Créations Exclusives</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ItemsCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
};

// Fonction de démo pour l'ajout au panier
const handleAddToCart = (product) => {
    console.log(`Ajouté au panier : ${product.name}`);
};

export default HomePage;