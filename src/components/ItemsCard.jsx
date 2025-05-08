// src/components/ItemsCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ItemsCard = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.image} alt={product.name} />
            <div className="item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{product.price} DZD</span>
                <Link to={`/product/${product.id}`}>Voir Détails</Link>
            </div>
        </div>
    );
};

export default ItemsCard;
