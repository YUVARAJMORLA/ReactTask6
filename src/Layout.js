

import React from 'react';
import Header from './Header';
import './App.css'
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer className="home-footer">
        <p>&copy; 2023 Yuvaraj Morla</p>
        <p>Turning dreams into code, one line at a time.</p>
      </footer>
    </div>
  );
}

export default Layout;
