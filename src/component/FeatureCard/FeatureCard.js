import React from 'react';
import './FeatureCard.css'
const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
