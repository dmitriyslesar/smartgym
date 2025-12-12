import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

function PersonalData() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment-method');
  };

  return (
    <div className="checkout-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="checkout-container">
          <h1>Личные данные</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <label>
              ФИО
              <input type="text" placeholder="Введите ФИО" required />
            </label>
            <label>
              Телефон
              <input type="tel" placeholder="Введите телефон" required />
            </label>
            <label>
              Адрес доставки
              <input type="text" placeholder="Введите адрес" required />
            </label>
            <button type="submit">Далее</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PersonalData;
