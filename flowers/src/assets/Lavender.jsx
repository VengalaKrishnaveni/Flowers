import React from 'react';
import { Link } from 'react-router-dom';

export default function Lavender() {
  return (
    <div className="container">
      <Link to="/" className="home-link">Home</Link>
      <h1 className="title">Lavender Flowers</h1>
      <div className="description">
        <p>Lavender is a versatile and aromatic herb known for its calming fragrance and stunning purple blossoms.</p>
        <p>With its soothing scent and beautiful appearance, lavender has been used for centuries in various cultures for its medicinal, culinary, and decorative purposes.</p>
        <p>Did you know that lavender is often associated with relaxation and tranquility? From aromatic sachets and essential oils to soothing teas and bath products, lavender offers a myriad of benefits for promoting well-being and stress relief.</p>
        <p>In addition to its therapeutic properties, lavender flowers are also valued for their ornamental beauty. Whether adorning gardens, bouquets, or floral arrangements, lavender adds a touch of elegance and serenity to any space.</p>
        <p>Join us as we delve into the enchanting world of lavender and uncover the many wonders of this beloved herb!</p>
      </div>
    </div>
  );
}
