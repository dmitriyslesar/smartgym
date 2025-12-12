import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Contacts.css';

function Contacts() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/call-waiting');
  };

  return (
    <div className="contacts-page">
      <header className="header">
        <Link to="/" className="logo">SmartGym</Link>
      </header>

      <main className="main-content">
        <div className="contacts-container">
          <div className="contact-info">
            <h2>Наши контакты:</h2>
            <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
            <p><strong>Почта:</strong> info@smartgym.ru</p>
            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
          </div>

          <div className="contact-form-container">
            <h2>Заказать звонок</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Имя
                <input type="text" placeholder="Введите ваше имя" required />
              </label>
              <label>
                Телефон
                <input type="tel" placeholder="Введите ваш телефон" required />
              </label>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contacts;
