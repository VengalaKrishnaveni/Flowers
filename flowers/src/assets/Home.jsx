import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <div className="nav">
        <Link to="/rose" className="rose-link">Rose</Link>
        <Link to="/lavender" className="lavender-link">Lavender</Link>
      </div>
      <h1 className="welcome-title">Welcome to our Flower Emporium!</h1>
      <div className="description">
        <p>At Flower Emporium, we're passionate about bringing the beauty of nature into your life through our exquisite collection of flowers.</p>
        <p>From vibrant roses to delicate lilies, each of our blooms is carefully selected to add a touch of elegance to any occasion.</p>
        <p>Whether you're celebrating a special milestone or simply brightening someone's day, our flowers are the perfect choice to convey your sentiments.</p>
        <p>Explore our selection today and let the beauty of flowers inspire you!</p>
      </div>
    </div>
  );
}
