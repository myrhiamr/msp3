import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../index.css';
import Home from './Home';
import Products from './Products';
import About from './About';
import Login from './Login';
import Creator1 from './Creator1';
import Creator2 from './Creator2';


const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/login', label: 'Login' },
  ];

const MyNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="d-none d-md-flex flex-column vh-100 custom-sidebar" style={{ backgroundColor: '#F7EAD5' }}>
          <Container className="p-3">
            <LinkContainer to="/">
              <Image src={logo} className="custom-logo" />
            </LinkContainer>
          </Container>
          <Nav defaultActiveKey="/" className="flex-column flex-grow-1" style={{ color: 'white' }}>
            {navLinks.map((link) => (
              <LinkContainer key={link.path} to={link.path} className="custom-link">
                <Nav.Link>{link.label}</Nav.Link>
              </LinkContainer>
            ))}
            <NavDropdown title="Poets" id="basic-nav-dropdown" menuVariant="dark">
              <LinkContainer to="/creators/creator1">
                <NavDropdown.Item>Creator 1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/creators/creator2">
                <NavDropdown.Item>Creator 2</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Col>
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creators/creator1" element={<Creator1 />} />
            <Route path="/creators/creator2" element={<Creator2 />} />
          </Routes>
        </Col>
      </Row>
      <Navbar expand="md" className="custom-navbar d-md-none" style={{ backgroundColor: '#F7EAD5' }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src={logo} className="custom-logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link) => (
                <LinkContainer key={link.path} to={link.path} className="custom-link">
                  <Nav.Link>{link.label}</Nav.Link>
                </LinkContainer>
              ))}
              <NavDropdown title="Poets" id="basic-nav-dropdown" menuVariant="dark">
                <LinkContainer to="/creators/creator1">
                  <NavDropdown.Item>Creator 1</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/creators/creator2">
                  <NavDropdown.Item>Creator 2</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};




export default MyNavbar;
