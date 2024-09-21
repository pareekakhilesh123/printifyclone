import React from 'react';
import Button from './component/Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <img src="logo-old.svg" alt="Printify Logo" />
        </div>
        <ul className="nav-links">
          <li>Catalog</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Use-cases</li>
          <li>Need help?</li>
        </ul>
        <div className="auth-buttons">
          <Button label="Log in" className="login-btn" />
          <Button label="Sign up" className="signup-btn" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
