import './footer.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Navbar bg="dark" variant="dark" className="py-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">


        <Nav className="mb-3 mb-md-0 text-center text-md-start">
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>


        <div className="d-flex gap-3 mb-3 mb-md-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedinIn size={20} />
          </a>
        </div>


        <Navbar.Text className="text-center text-md-end">
          &copy; {year} Barakoti Auto Sales. All rights reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
