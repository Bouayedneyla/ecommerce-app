import React from "react";
import products from "../data/products";
import ItemsCard from "../components/ItemsCard";

const HomePage = () => (
  <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
    {products.map(product => (
      <ItemsCard key={product.id} product={product} />
    ))}
  </div>
);

export default HomePage;
