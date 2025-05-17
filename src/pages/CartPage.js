import React from "react";

export default function CartPage({ cart, onRemove }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="cart-page">
      <h2>Корзина</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name} - {item.price}$</span>
          <button onClick={() => onRemove(index)}>Удалить</button>
        </div>
      ))}
      <h3>Сумма: {total}$</h3>
    </div>
  );
}
