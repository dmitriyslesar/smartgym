import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function Warranty() {
  return (
    <div className="info-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="info-container">
          <h1>Гарантия</h1>
          <div className="info-content">
            <p>На все тренажёры действует официальная гарантия производителя.</p>
            <p><strong>Гарантийные сроки:</strong></p>
            <ul>
              <li>Силовые тренажёры: 3 года</li>
              <li>Кардиотренажёры: 2 года</li>
              <li>Электроника и пульт управления: 1 год</li>
            </ul>
            <p><strong>Гарантия включает:</strong></p>
            <ul>
              <li>Бесплатный ремонт заводских дефектов</li>
              <li>Замену неисправных деталей</li>
              <li>Выезд мастера на дом</li>
            </ul>
            <p><strong>Гарантия не распространяется на:</strong></p>
            <ul>
              <li>Механические повреждения</li>
              <li>Неправильную эксплуатацию</li>
              <li>Естественный износ</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Warranty;
