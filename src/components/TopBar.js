
// src/components/TopBar.js
import React from 'react';
import './TopBar.css';
import logo1 from '../images/logo1.PNG'

function TopBar() {
  return (
    <div className="top-bar">
      <img src={logo1} alt="Logo" className="logo" />
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default TopBar;
