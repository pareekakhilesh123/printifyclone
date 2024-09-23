import React from 'react';
import Card from './component/Card/Card';
import './Socialproof.css'; 

function Socialproof() {
  return (
    <>
      <div className='socialproof'>
        <h3>Trusted by over 8M sellers around the world</h3>
        <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
      </div>
      
      <div className='testimonial-section'>
        <Card
          image="robert.png"
          name="Robert A. Voltaire"
          star="⭐⭐⭐⭐⭐"
          link="#"
          review="Printify has been an incredible service for us musicians unable to keep large amount of inventory..."
        />
        
        <Card
          image="quinten.png"
          name="Quinten Barney"
          star="⭐⭐⭐⭐⭐"
          link="#"
          review="We chose Printify because of their offerings as well as their incredibly low prices..."
        />

        <Card
          image="nikki.png"
          name="Nikki"
          star="⭐⭐⭐⭐⭐"
          link="#"
          review="Printify has been amazing as we grow our business..."
        />
      </div>
    </>
  );
}

export default Socialproof;
