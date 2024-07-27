import React from 'react';
import { Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'; // Import Row and Col
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import logo from '../assets/logo.png';
import '../index.css';
import Home from './Home'; // Import HomePage component
import Products from './Products';
import About from './About';
import Login from './Login';
import Creator1 from './Creator1';
import Creator2 from './Creator2';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/login', label: 'Login' }
];

const MyNavbar = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3} className="d-flex flex-column vh-100 custom-sidebar" style={{ backgroundColor: '#F7EAD5' }}>
                    <Container className="p-3">
                        <LinkContainer to="/">
                            <Image src={logo} className="custom-logo" roundedCircle fluid />
                        </LinkContainer>
                    </Container>
                    <Nav defaultActiveKey="/" className="flex-column flex-grow-1" style={{ color: 'white' }}>
                        {navLinks.map(link => (
                            <LinkContainer key={link.path} to={link.path} className="custom-link">
                                <Nav.Link>{link.label}</Nav.Link>
                            </LinkContainer>
                        ))}
                        <NavDropdown title="About Creators" id="basic-nav-dropdown" menuVariant="dark">
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
        </Container>
    );
};

export default MyNavbar;