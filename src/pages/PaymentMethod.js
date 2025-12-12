import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

function PaymentMethod() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === 'card') {
      navigate('/card-data');
    } else {
      navigate('/company-details');
    }
  };

  return (
    <div className="checkout-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="checkout-container">
          <h1>Способ оплаты</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="payment-methods">
              <label className={`payment-option ${method === 'card' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="method"
                  value="card"
                  checked={method === 'card'}
                  onChange={(e) => setMethod(e.target.value)}
                />
                Банковская карта
              </label>
              <label className={`payment-option ${method === 'invoice' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="method"
                  value="invoice"
                  checked={method === 'invoice'}
                  onChange={(e) => setMethod(e.target.value)}
                />
                По реквизитам компании
              </label>
            </div>
            <button type="submit">Далее</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PaymentMethod;
