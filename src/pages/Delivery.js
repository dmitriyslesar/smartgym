import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function Delivery() {
  return (
    <div className="info-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="info-container">
          <h1>Доставка</h1>
          <div className="info-content">
            <p>Мы осуществляем доставку по всей России.</p>
            <p><strong>Способы доставки:</strong></p>
            <ul>
              <li>Курьерская доставка до двери</li>
              <li>Самовывоз со склада</li>
              <li>Транспортная компания</li>
            </ul>
            <p><strong>Сроки:</strong></p>
            <ul>
              <li>Москва и МО: 1-3 дня</li>
              <li>Санкт-Петербург: 2-4 дня</li>
              <li>Другие регионы: 5-14 дней</li>
            </ul>
            <p><strong>Стоимость:</strong> рассчитывается индивидуально в зависимости от веса и региона.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Delivery;
