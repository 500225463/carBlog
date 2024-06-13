    // src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Animal Blog. All rights reserved.</p>
      <nav>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </div>
  );
}

export default Footer;
