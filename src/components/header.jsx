import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const headerStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#333', // Adjust the color as needed
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={headerStyle}>SanaUllah</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
