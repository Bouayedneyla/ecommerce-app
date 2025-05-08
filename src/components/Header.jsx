// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#222", color: "#fff", padding: "10px 20px" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff" }}>Accueil</Link>
        <Link to="/cart" style={{ color: "#fff" }}>Panier</Link>
      </nav>
    </header>
  );
}

export default Header;
