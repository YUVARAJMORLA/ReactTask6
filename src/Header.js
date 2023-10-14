import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; 

function Header() {
  return (
    <nav>
      <Link to="/" className="nav-logo">Yuvaraj Morla</Link>
      <ul className="nav-links">
         <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
         <li><Link to="/project" className="nav-link">Projects</Link></li>
      </ul>

      <Link to="/contact" className="nav-contact">Contact Me</Link>
    </nav>
  );
}

export default Header;
