import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

function CompanyDetails({ clearCart }) {
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
          <h1>Реквизиты компании</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <label>
              Название компании
              <input type="text" placeholder="Введите название" required />
            </label>
            <label>
              ИНН
              <input type="text" placeholder="Введите ИНН" required />
            </label>
            <label>
              КПП
              <input type="text" placeholder="Введите КПП" required />
            </label>
            <label>
              Юридический адрес
              <input type="text" placeholder="Введите адрес" required />
            </label>
            <label>
              Расчётный счёт
              <input type="text" placeholder="Введите номер счёта" required />
            </label>
            <label>
              БИК
              <input type="text" placeholder="Введите БИК" required />
            </label>
            <button type="submit">Оформить заказ</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CompanyDetails;
