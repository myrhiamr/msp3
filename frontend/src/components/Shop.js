import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../index.css'; // Ensure your CSS file is correctly imported

// Mock product data
const mockProduct = {
  image: '/assets/poemone.jpeg', // Adjust this path to your assets folder
  name: 'Beautiful Postcard',
  price: 9.99,
  description: 'A beautiful postcard with a lovely poem.',
};

const shopOne = () => {
  const { image, name, price, description } = mockProduct;

  return (
    <Container className="product-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={8} lg={6}>
          <Card className="product-card">
            <Card.Img variant="top" src={image} alt={name} className="product-image" />
            <Card.Body>
              <Card.Title className="product-name">{name}</Card.Title>
              <Card.Text className="product-description">{description}</Card.Text>
              <Card.Text className="product-price">${price.toFixed(2)}</Card.Text>
              <Button variant="primary" className="add-to-cart-button">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default shopOne;
