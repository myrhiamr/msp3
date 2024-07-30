import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { CiShoppingCart } from 'react-icons/ci';
import '../index.css';

const TopNavbar = ({ cartCount }) => {
  const links = [
    { path: '/shop', label: 'Shop' },
    { path: '/contactus', label: 'Contact Us' },
  ];

  return (
    <>
      <Navbar bg="transparent" expand="lg" className="navbar">
        <Navbar.Brand as={Link} to="/">PostcardPoets.Co</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {links.map((link) => (
              <Nav.Link key={link.path} as={Link} to={link.path}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <CiShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavbar;
