import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './Auth.css';

function Login() {
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
        <h1>Вход</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="button-link">Войти</button>
        </form>
        <div className="login-links">
          <Link to="/forgot-password">Забыли пароль?</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
