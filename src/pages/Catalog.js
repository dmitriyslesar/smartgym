import React from 'react';
import { Link } from 'react-router-dom';
import { products, useAuth } from '../App';
import './Catalog.css';

function Catalog({ category }) {
  const categoryProducts = products[category] || [];
  const { user, logout } = useAuth();

  return (
    <div className="catalog-page">
      <header>
        <nav>
          <ul className="nav-left">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
          <div className="nav-right">
            {user ? (
              <>
                <span className="user-name">{user}</span>
                <button className="logout-btn" onClick={logout}>Выход</button>
              </>
            ) : (
              <button className="login"><Link to="/login">вход</Link></button>
            )}
            <span className="cart"><Link to="/cart">корзина</Link></span>
          </div>
        </nav>
      </header>

      <main>
        <div className="categories">
          <Link to="/catalog/silovye" className={category === 'power' ? 'active' : ''}>Силовые тренажеры</Link>
          <Link to="/catalog/cardio" className={category === 'cardio' ? 'active' : ''}>Кардио</Link>
          <Link to="/catalog/ramy" className={category === 'frames' ? 'active' : ''}>Силовые рамы</Link>
        </div>

        <div className="products">
          {categoryProducts.map(product => (
            <div key={product.id} className="product">
              <Link to={`/product/${product.id}`}>
                <div className="image-container">
                  <img src={product.image} alt={product.name} loading="lazy" width="300" height="300" />
                </div>
                <p className="title">{product.name}</p>
              </Link>
              <p className="price">{product.price} P</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <ul>
          <li><Link to="/payment-terms">Условия оплаты</Link></li>
          <li><Link to="/delivery">Условия доставки</Link></li>
          <li><Link to="/warranty">Гарантийные обязательства</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Catalog;
