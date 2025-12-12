import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, productDescriptions } from '../App';
import './ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let product = null;
  for (const category of Object.values(products)) {
    product = category.find(p => p.id === id);
    if (product) break;
  }

  const description = productDescriptions[id];

  if (!product) {
    return (
      <div className="product-detail-page">
        <h1>Товар не найден</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      <Link to={product.backLink} className="close-btn">x</Link>

      <div className="container">
        <div className="text-section">
          {description && description.sections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}

          {description && description.specs && (
            <>
              <h3>Основные</h3>
              <ul>
                {description.specs.map((spec, index) => (
                  <li key={index}>{spec.label}: <strong>{spec.value}</strong></li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="image-section">
          <img src={product.image} alt={product.name} />
          <div className="price">{description ? description.price : product.price} P</div>
          <button onClick={handleAddToCart} className="add-to-cart">В КОРЗИНУ</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
