import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function CallWaiting() {
  return (
    <div className="message-page">
      <div className="container">
        <Link to="/" className="home-link">SmartGym</Link>
        <div className="message-box">
          Ожидайте звонка
        </div>
      </div>
    </div>
  );
}

export default CallWaiting;
