import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function PasswordSent() {
  return (
    <div className="message-page">
      <div className="container">
        <Link to="/" className="home-link">SmartGym</Link>
        <div className="message-box">
          Пароль отправлен вам на почту
        </div>
      </div>
    </div>
  );
}

export default PasswordSent;
