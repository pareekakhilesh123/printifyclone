import React from 'react';
import FeatureCard from './component/FeatureCard/FeatureCard';
import './Features.css'

const Features = () => {
  return (
    <div className="features">
      <FeatureCard
        image={"higher-profits.svg"}
        title="Higher Profits"
        description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
      />
      <FeatureCard
        image={"robust-scaling.svg"}
        title="Robust Scaling"
        description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
      />
      <FeatureCard
        image={"best-selection.svg"}
        title="Best Selection"
        description="With 900+ products and top-quality brands, you can choose the best products for your business."
      />
    </div>
  );
};

export default Features;
