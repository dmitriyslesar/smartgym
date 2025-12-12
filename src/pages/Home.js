import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import './Home.css';

function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="home-page">
      <header className="site-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/catalog/silovye">Товары</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
          <div className="nav-actions">
            {user ? (
              <>
                <span className="user-name">{user}</span>
                <button onClick={logout} className="btn-logout">Выход</button>
              </>
            ) : (
              <Link to="/login" className="btn-login">Вход</Link>
            )}
            <Link to="/cart" className="cart-icon">корзина</Link>
          </div>
        </nav>
        <div className="hero">
          <h1 className="hero-title">МАГАЗИН УМНЫХ ТРЕНАЖЕРОВ</h1>
        </div>
      </header>

      <main>
        <section className="features">
          <h2 className="features-title">
            Огромный выбор <span className="highlight">умных тренажеров</span>
          </h2>
          <ul className="features-list">
            <li>Сохранение данных в облаке</li>
            <li>Встроенный онлайн-тренер с анализом и рекомендациями по технике выполнения</li>
            <li>Персонализированный вход в тренажер и доступ к личным программам</li>
            <li>Сверхточная регулировка нагрузки</li>
          </ul>
          <p className="features-footer">
            Мы предлагаем лучшие технологии, высокое качество, превосходный опыт.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
