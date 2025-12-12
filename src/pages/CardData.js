import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

function CardData({ clearCart }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/thank-you');
  };

  return (
    <div className="checkout-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="checkout-container">
          <h1>Данные карты</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <label>
              Номер карты
              <input type="text" placeholder="0000 0000 0000 0000" required />
            </label>
            <label>
              Имя владельца
              <input type="text" placeholder="Введите имя" required />
            </label>
            <label>
              Срок действия
              <input type="text" placeholder="MM/YY" required />
            </label>
            <label>
              CVV
              <input type="password" placeholder="000" maxLength="3" required />
            </label>
            <button type="submit">Оплатить</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CardData;
