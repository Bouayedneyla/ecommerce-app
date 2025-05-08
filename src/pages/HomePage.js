// src/pages/HomePage.js

import React from 'react';
import ItemsCard from '../components/ItemsCard';

const products = [
    { id: 1, name: 'Bague en or', description: 'Bague fine en or 18k', price: 5000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Collier en diamant', description: 'Collier en diamant avec chaîne en argent', price: 15000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Bracelet en argent', description: 'Bracelet en argent massif', price: 2000, image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Nos Bijoux</h1>
            <div className="products-list">
                {products.map(product => (
                    <ItemsCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
