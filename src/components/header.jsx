// Navbar.js

import React from 'react';

const Header = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftSectionStyle}>Sanaullah.</div>
      <div style={rightSectionStyle}>
        <a style={linkStyle} href="#home">Home</a>
        <a style={linkStyle} href="#about">About</a>
        <a style={linkStyle} href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  padding: '10px',
  color: '#F0F3F4',
};

const leftSectionStyle = {
  fontWeight: 'bold',
  fontSize: '1.5em',
  color: '#F0F3F4',
};

const rightSectionStyle = {
  display: 'flex',
};

const linkStyle = {
  margin: '0 10px',
  color: '#707B7C',
  textDecoration: 'none',
};

export default Header;
