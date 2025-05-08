import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Perle Rare</h1>
    <div className="flex gap-4">
      <Link to="/">Accueil</Link>
      <Link to="/panier">Panier</Link>
    </div>
  </nav>
);

export default Navbar;
