import React from 'react';
import './PlatformBox.css';

const PlatformBox = ({ imageSrc, altText }) => {
  return (
    <div className="platform-box">
      <img src={imageSrc} alt={altText} className="platform-logo" />
    </div>
  );
};

export default PlatformBox;
