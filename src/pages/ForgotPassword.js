import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/password-sent');
  };

  return (
    <div className="login-overlay">
      <Link to="/catalog/silovye" className="close-button">&times;</Link>
      <div className="login-box">
        <h1>Восстановить пароль</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Почта
            <input type="email" placeholder="Введите свою почту" required />
          </label>
          <label>
            Секретное слово
            <input type="text" placeholder="Введите секретное слово" required />
          </label>
          <button type="submit" className="button-link">Отправить</button>
        </form>
        <div className="login-links">
          <Link to="/login">Вернуться к входу</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
