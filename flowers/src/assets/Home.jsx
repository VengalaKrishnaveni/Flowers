import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import roseImg from './rose.jpg';
import lavenderImg from './lavender.jpg';

export default function Home() {
  return (
    <div className="home-container">
      
      <h1 className="welcome-title">Welcome to our Flower Emporium!</h1>
      <div className="description">
        <p>At Flower Emporium, we're passionate about bringing the beauty of nature into your life through our exquisite collection of flowers.</p>
        <p>From vibrant roses to delicate lilies, each of our blooms is carefully selected to add a touch of elegance to any occasion.</p>
        <p>Whether you're celebrating a special milestone or simply brightening someone's day, our flowers are the perfect choice to convey your sentiments.</p>
        <p>Explore our selection today and let the beauty of flowers inspire you!</p>
      </div>

      <div className="cards">
      <Card img = {roseImg} heading = "Roses" description = "Roses are a classic choice for any occasion. With their vibrant colors and delicate petals, they're sure to brighten up any room." link = "/rose" />
      <Card
  img={lavenderImg}
  heading="Lavenders"
  description="Lavenders are known for their calming fragrance and beautiful purple blossoms. They're a perfect choice to create a soothing and relaxing atmosphere."
  link="/lavender"
/>
      </div>
      


      
    </div>
  );
}
