import React from 'react';
import { Link } from 'react-router-dom';

export default function Rose() {
  return (
    <div className="container">
      <Link to="/" className="home-link">Home</Link>
      <h1 className="title">Rose Flowers</h1>
      <div className="description">
        <p>Roses are one of the most beloved and iconic flowers, known for their beauty, fragrance, and symbolism.</p>
        <p>With their elegant petals and enchanting aroma, roses have captivated hearts for centuries, making them a timeless symbol of love, romance, and passion.</p>
        <p>Did you know that roses come in a variety of colors, each carrying its own unique meaning? From classic red roses symbolizing love and desire to cheerful yellow roses representing friendship and joy, there's a rose for every occasion.</p>
        <p>Whether used in bouquets, arrangements, or garden landscapes, roses add a touch of sophistication and charm to any setting.</p>
        <p>Join us as we explore the enchanting world of roses and discover why these exquisite flowers hold a special place in our hearts!</p>
      </div>
    </div>
  );
}
