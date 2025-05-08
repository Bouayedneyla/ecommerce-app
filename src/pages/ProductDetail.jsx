import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Collier Perle Rare",
    price: 120,
    description: "Un collier élégant pour des occasions spéciales.",
    image: "https://via.placeholder.com/200x150.png?text=Collier+Perle+Rare"
  },
  {
    id: 2,
    name: "Bracelet Élégance",
    price: 80,
    description: "Un bracelet raffiné pour sublimer votre poignet.",
    image: "https://via.placeholder.com/200x150.png?text=Bracelet+Élégance"
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produit non trouvé.</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="mb-4 w-full" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl mt-2">{product.price} €</p>
    </div>
  );
};

export default ProductDetail;

