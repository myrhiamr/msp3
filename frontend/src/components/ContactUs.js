import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import contactImage from '../assets/thankyou.jpeg'; // Adjust the path as needed

const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h3>How can we help you?</h3>
          <h1>Contact Us</h1>
          <p>We are thankful for choosing Postcards.inc as your inspiration.</p>
          <p>We are here to address any questions or concerns.</p>
          <p>
            <strong>123 Main St, San Diego CA 92015</strong>
          </p>
        </Col>
        <Col md={6}>
          <Image src={contactImage} alt="Contact Us" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
