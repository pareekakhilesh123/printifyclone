import React from 'react';
import './Card.css'; 

const Card = ({ image, name, link, review,star }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-img">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-details">
        <h4>{name}</h4>
        <a href={link} className="store-link">Store link</a>
        <span>{star}</span>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Card;
