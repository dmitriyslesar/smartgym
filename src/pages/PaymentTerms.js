import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function PaymentTerms() {
  return (
    <div className="info-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="info-container">
          <h1>Условия оплаты</h1>
          <div className="info-content">
            <p><strong>Способы оплаты:</strong></p>
            <ul>
              <li>Банковская карта (Visa, Mastercard, МИР)</li>
              <li>Безналичный расчёт для юридических лиц</li>
              <li>Наличными при получении</li>
            </ul>
            <p><strong>Оплата банковской картой:</strong></p>
            <p>Оплата происходит через защищённый платёжный шлюз. Данные вашей карты не сохраняются на сервере.</p>
            <p><strong>Оплата для юридических лиц:</strong></p>
            <p>Выставляем счёт на оплату с НДС. После оплаты предоставляем полный пакет документов.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaymentTerms;
