import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function ThankYou() {
  return (
    <div className="message-page">
      <div className="container">
        <Link to="/" className="home-link">SmartGym</Link>
        <div className="message-box">
          Спасибо за покупку!
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
