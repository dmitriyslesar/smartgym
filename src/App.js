import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import PasswordSent from './pages/PasswordSent';
import Contacts from './pages/Contacts';
import CallWaiting from './pages/CallWaiting';
import PersonalData from './pages/PersonalData';
import PaymentMethod from './pages/PaymentMethod';
import CardData from './pages/CardData';
import CompanyDetails from './pages/CompanyDetails';
import ThankYou from './pages/ThankYou';
import Delivery from './pages/Delivery';
import Warranty from './pages/Warranty';
import PaymentTerms from './pages/PaymentTerms';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const products = {
  power: [
    { id: 'tyaga-sverhu', name: 'Тяга сверху', price: '9 350 000', image: '/images/Тяга сверху.png', category: 'power', backLink: '/catalog/silovye' },
    { id: 'zhim-ot-plech', name: 'Жим от плеч', price: '9 650 000', image: '/images/Жим от плеч.png', category: 'power', backLink: '/catalog/silovye' },
    { id: 'razgibanie-nog', name: 'Разгибание ног', price: '8 950 000', image: '/images/разгибание ног.png', category: 'power', backLink: '/catalog/silovye' },
    { id: 'zhim-nogami', name: 'Жим ногами', price: '9 730 500', image: '/images/Жим ногами.png', category: 'power', backLink: '/catalog/silovye' },
  ],
  cardio: [
    { id: 'begovaya-dorozhka', name: 'Беговая дорожка', price: '3 100 000', image: '/images/беговая.png', category: 'cardio', backLink: '/catalog/cardio' },
    { id: 'velotrenazher', name: 'Велотренажер', price: '3 430 000', image: '/images/велосипед.png', category: 'cardio', backLink: '/catalog/cardio' },
    { id: 'grebnoy-trenazher', name: 'Гребной тренажер', price: '2 890 000', image: '/images/гребной.png', category: 'cardio', backLink: '/catalog/cardio' },
    { id: 'skalolaz', name: 'Скалолаз', price: '3 000 000', image: '/images/скалолаз.png', category: 'cardio', backLink: '/catalog/cardio' },
  ],
  frames: [
    { id: 'kachayushchiysya', name: 'Качающийся тренажер', price: '10 220 000', image: '/images/Качающийся тренер.png', category: 'frames', backLink: '/catalog/ramy' },
    { id: 'troynoy', name: 'Тройной тренажер', price: '27 550 000', image: '/images/тройной тренажер.png', category: 'frames', backLink: '/catalog/ramy' },
    { id: 'multi-trainer', name: 'Мульти-трейнер', price: '9 580 000', image: '/images/мульти-трейнер.png', category: 'frames', backLink: '/catalog/ramy' },
  ],
};

export const productDescriptions = {
  'tyaga-sverhu': {
    title: 'Тяга сверху',
    price: '9 650 000',
    sections: [
      { title: 'Универсальность', text: 'Сиденье имеет электрическую регулировку и может быть автоматически отрегулировано в исходное положение сохраняя персональные настройки пользователя. Регулировку нагрузки можно осуществлять с помощью дисплея и кнопок управления интегрированных в рукоятки' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм)' },
      { title: 'Эффективность', text: 'Поддержка изотонического, эксцентрического, изокинетического и других режимов' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Длина товара, см', value: '160' },
      { label: 'Ширина товара, см', value: '110' },
      { label: 'Высота товара, см', value: '190' },
      { label: 'Вес товара, кг', value: '300' },
    ],
  },
  'zhim-ot-plech': {
    title: 'Жим от плеч',
    price: '9 650 000',
    sections: [
      { title: 'Универсальность', text: 'Сиденье имеет электрическую регулировку и может быть автоматически отрегулировано в исходное положение, сохраняя персональные настройки пользователя. Регулировку нагрузки можно осуществлять с помощью дисплея и кнопок управления, интегрированных в рукоятки.' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм)' },
      { title: 'Эффективность', text: 'Поддержка изотонического, эксцентрического, изокинетического и других режимов' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Длина товара, см', value: '160' },
      { label: 'Ширина товара, см', value: '110' },
      { label: 'Высота товара, см', value: '190' },
      { label: 'Вес товара, кг', value: '300' },
    ],
  },
  'razgibanie-nog': {
    title: 'Разгибание ног',
    price: '8 950 000',
    sections: [
      { title: 'Универсальность', text: 'Сиденье имеет электрическую регулировку и может быть автоматически отрегулировано в исходное положение.' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм)' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Длина товара, см', value: '160' },
      { label: 'Ширина товара, см', value: '110' },
      { label: 'Высота товара, см', value: '190' },
      { label: 'Вес товара, кг', value: '280' },
    ],
  },
  'zhim-nogami': {
    title: 'Жим ногами',
    price: '9 730 500',
    sections: [
      { title: 'Универсальность', text: 'Сиденье имеет электрическую регулировку.' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм)' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '300' },
      { label: 'Длина товара, см', value: '220' },
      { label: 'Ширина товара, см', value: '140' },
      { label: 'Высота товара, см', value: '180' },
      { label: 'Вес товара, кг', value: '400' },
    ],
  },
  'begovaya-dorozhka': {
    title: 'Беговая дорожка',
    price: '3 100 000',
    sections: [
      { title: 'Высококлассная конфигурация', text: 'Сенсорный дисплей 22 дюйма и полотно шириной 60 см.' },
      { title: 'Высокая производительность', text: 'Пиковая скорость 22 км/ч, шаг в 0.1 км/ч, 21 положение смены угла высоты дорожки.' },
      { title: 'Биологическая обратная связь', text: 'Обратная связь в режиме реального времени о параметрах походки, таких как длина шага, частота его выполнения, время полета и время соприкосновения с землей.' },
    ],
    specs: [
      { label: 'Макс. скорость, км/ч', value: '22' },
      { label: 'Длина бегового полотна, см', value: '163' },
      { label: 'Ширина бегового полотна, см', value: '60' },
      { label: 'Мин. скорость, км/ч', value: '0.8' },
      { label: 'Угол наклона', value: '18' },
      { label: 'Количество программ, шт', value: '24' },
      { label: 'Длина товара, см', value: '221.6' },
      { label: 'Ширина товара, см', value: '102.2' },
      { label: 'Высота товара, см', value: '169' },
      { label: 'Вес товара, кг', value: '274' },
    ],
  },
  'velotrenazher': {
    title: 'Велотренажер',
    price: '3 430 000',
    sections: [
      { title: 'Комфорт', text: 'Эргономичное сиденье с регулировкой.' },
      { title: 'Производительность', text: '20 уровней нагрузки.' },
    ],
    specs: [
      { label: 'Уровней нагрузки', value: '20' },
      { label: 'Макс. вес пользователя, кг', value: '150' },
    ],
  },
  'grebnoy-trenazher': {
    title: 'Гребной тренажер',
    price: '2 890 000',
    sections: [
      { title: 'Многорежимность', text: 'Поддержка сопротивления жидкости в режиме постоянного усилия.' },
    ],
    specs: [
      { label: 'Макс. вес пользователя, кг', value: '150' },
      { label: 'Длина товара, см', value: '220' },
    ],
  },
  'skalolaz': {
    title: 'Скалолаз',
    price: '3 000 000',
    sections: [
      { title: 'Легко разбирается', text: 'Педали имеют систему быстрой разборки, верхний и нижний корпуса легко трансформируются.' },
    ],
    specs: [
      { label: 'Макс. вес пользователя, кг', value: '130' },
      { label: 'Высота товара, см', value: '200' },
    ],
  },
  'kachayushchiysya': {
    title: 'Качающийся тренажер',
    price: '10 220 000',
    sections: [
      { title: 'Высококлассная конфигурация', text: 'Сенсорный дисплей и множество режимов.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '250' },
      { label: 'Количество станций', value: '3' },
    ],
  },
  'troynoy': {
    title: 'Тройной тренажер',
    price: '27 550 000',
    sections: [
      { title: 'Многофункциональность', text: 'Тройной тренажер содержит три функциональных тренажера для одновременной тренировки трех человек.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '600' },
      { label: 'Количество станций', value: '3' },
    ],
  },
  'multi-trainer': {
    title: 'Мульти-трейнер',
    price: '9 580 000',
    sections: [
      { title: 'Универсальность', text: 'Вертикальная и горизонтальная многоступенчатая регулировка рычагов. Дополнительные аксессуары: манжеты, гриф, тяги.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '200' },
      { label: 'Количество упражнений', value: '50+' },
    ],
  },
};

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/silovye" element={<Catalog category="power" addToCart={addToCart} />} />
          <Route path="/catalog/cardio" element={<Catalog category="cardio" addToCart={addToCart} />} />
          <Route path="/catalog/ramy" element={<Catalog category="frames" addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-sent" element={<PasswordSent />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/call-waiting" element={<CallWaiting />} />
          <Route path="/personal-data" element={<PersonalData />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/card-data" element={<CardData clearCart={clearCart} />} />
          <Route path="/company-details" element={<CompanyDetails clearCart={clearCart} />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/payment-terms" element={<PaymentTerms />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
