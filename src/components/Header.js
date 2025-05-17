import React from "react";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>NEEFREMOV</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина ({cartCount})</Link>
      </nav>
    </header>
  );
}
