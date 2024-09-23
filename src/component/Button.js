import React from 'react';
import './Button.css'

const Button = ({ label, onClick, className, type = 'button' }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
