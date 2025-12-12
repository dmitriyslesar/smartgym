import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './Auth.css';

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate('/catalog/silovye');
  };

  return (
    <div className="login-overlay">
      <Link to="/catalog/silovye" className="close-button">&times;</Link>
      <div className="login-box">
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Почта
            <input type="email" placeholder="Введите свою почту" required />
          </label>
          <label>
            Логин
            <input 
              type="text" 
              placeholder="Введите логин" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Пароль
            <input type="password" placeholder="Введите пароль" required />
          </label>
          <label>
            Секретное слово
            <input type="text" placeholder="Введите секретное слово" required />
          </label>
          <button type="submit" className="button-link">Зарегистрироваться</button>
        </form>
        <div className="login-links">
          <Link to="/login">Уже есть аккаунт? Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
