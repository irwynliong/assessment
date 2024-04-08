import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Use Link to navigate to the root route on click */}
        <Link to="/" className="logo1">10 E A S T</Link>
      </div>
      <nav className="navigation">
        <button className="inquire-button">INQUIRE</button>
        <Link to="/login" className="login-link">LOGIN</Link>
        <div className="menu-icon">☰</div>
      </nav>
    </header>
  );
};

export default Header;
