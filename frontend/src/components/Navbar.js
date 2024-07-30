import React from 'react';
import { Container, Row, Col, Nav, NavDropdown, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';
import '../index.css';
import Home from './Home';
import PoetryList from './sellCard';
import ContactUs from './ContactUs';
import Login from './Login';
import Poetone from './Poetone';
import Poettwo from './Poettwo';


const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/contactus', label: 'Contact Us' },
  { path: '/login', label: 'Login' },
];

const MyNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="d-none d-md-flex flex-column vh-100 custom-sidebar" style={{ backgroundColor: '#F6f1e8' }}>
          <Container>
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
              <LinkContainer to="/poets/poet1">
                <NavDropdown.Item>Poet 1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/poets/poet2">
                <NavDropdown.Item>Poet 2</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart size={24} />
          </Nav.Link>
        </Nav>
        </Col>
        <Col md={9} className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<PoetryList />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/poets/poet1" element={<Poetone />} />
            <Route path="/poets/poet2" element={<Poettwo/>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavbar;