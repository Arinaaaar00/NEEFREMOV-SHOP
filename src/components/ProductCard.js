import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price}$</strong></p>
      <button onClick={() => onAdd(product)}>Добавить в корзину</button>
    </div>
  );
}
