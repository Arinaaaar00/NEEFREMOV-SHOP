import React, { useState } from "react";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function MainPage({ onAddToCart }) {
  const [filter, setFilter] = useState("Все");
  const filtered = filter === "Все" ? products : products.filter(p => p.category === filter);

  return (
    <div className="main">
      <Aside onFilter={setFilter} />
      <div className="products">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
