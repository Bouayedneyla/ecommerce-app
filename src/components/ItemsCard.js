import React from 'react';

const ItemsCard = ({ product }) => {
  return (
    <div className="items-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Ajouter au Panier</button>
    </div>
  );
};

export default ItemsCard;
