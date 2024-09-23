import React from 'react';
import './PlatformGrid.css';
import PlatformBox from './component/PlatformBox/PlatformBox';

const PlatformGrid = () => {
  return (
    <div className="platform-grid">
      <h2>Connect your store</h2>
      <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>
      <div className="platform-grid-container">
        <PlatformBox imageSrc="shopify.svg" altText="Shopify" />
        <PlatformBox imageSrc="wix.svg" altText="Wix" />
        <PlatformBox imageSrc="etsy.svg" altText="Etsy" />
        <PlatformBox imageSrc="squarespace.svg" altText="Squarespace" /> 
        <PlatformBox imageSrc="more.svg" altText="API" />
        <PlatformBox imageSrc="big-commerce.svg" altText="BigCommerce" />
        <PlatformBox imageSrc="woo.svg" altText="WooCommerce" />
        <PlatformBox imageSrc="presta.svg" altText="PrestaShop" />
        
       
      </div>
    </div>
  );
};

export default PlatformGrid;
