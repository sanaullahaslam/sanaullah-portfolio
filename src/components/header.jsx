// Navbar.js

import React from 'react';

const Header = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftSideStyle}>
        <span style={brandStyle}>Sanaullah.</span>
      </div>
      <div style={rightSideStyle}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: 'black',
  color: 'white',
};

const leftSideStyle = {
  display: 'flex',
  alignItems: 'center',
};

const brandStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'grey', // Adjust color as needed
};

const rightSideStyle = {
  display: 'flex',
};

export default Header;
