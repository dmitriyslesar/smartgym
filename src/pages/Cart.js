import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleOrder = () => {
    if (!user) {
      setShowAlert(true);
    } else {
      navigate('/personal-data');
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <header className="header">
          <h1 className="title">Здесь будут ваши товары</h1>
          <Link to="/" className="nav-link">Главная</Link>
        </header>

        <main className="content">
          {cart.length > 0 && (
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price} P</span>
                  <span className="item-qty">x{item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Удалить</button>
                </div>
              ))}
            </div>
          )}

          {showAlert && (
            <div className="auth-alert">
              <p>Для оформления заказа необходимо войти в аккаунт</p>
              <Link to="/login" className="alert-link">Войти</Link>
              <button onClick={() => setShowAlert(false)} className="alert-close">Закрыть</button>
            </div>
          )}
        </main>

        <div className="cart-buttons">
          <Link to="/catalog/silovye" className="back-button">НАЗАД</Link>
          <button onClick={handleOrder} className="order-button">ЗАКАЗАТЬ</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
