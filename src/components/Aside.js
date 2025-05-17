import React from "react";
import { products } from "../data/products";

export default function Aside({ onFilter }) {
  const categories = ["Все", ...new Set(products.map(p => p.category))];

  return (
    <aside className="aside">
      <h2>Категории</h2>
      {categories.map(cat => (
        <div key={cat} onClick={() => onFilter(cat)} className="category">{cat}</div>
      ))}
    </aside>
  );
}
