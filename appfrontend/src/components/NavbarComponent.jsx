import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import logo from '../assets/barakoti_auto_logo.png';


function NavbarComponent() {
    const location = useLocation(); // for active link highlighting

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="slim-navbar">
            <Container fluid>
                <Navbar.Brand
                    as={Link}
                    to="/home"
                    className="logo-img d-inline-block align-top"
                >
                    <img
                        src={logo}
                        alt="Barakoti Auto Logo"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">


                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link
                            as={Link}
                            to="/inventory"
                            active={location.pathname === '/inventory'}
                        >
                            View Inventory
                        </Nav.Link>

                        <NavDropdown title="Get Approved" id="getApprovedDropdown">
                            <NavDropdown.Item as={Link} to="/apply">
                                Apply for Financing
                            </NavDropdown.Item>
                        </NavDropdown>


                    </Nav>


                    <Nav className="my-2 my-lg-0">
                        <NavDropdown title="Company Info" id="companyDropdown" align="end">
                            <NavDropdown.Item
                                as={Link}
                                to="/about"
                                active={location.pathname === '/about'}
                            >
                                About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/careers"
                                active={location.pathname === '/careers'}
                            >
                                Careers
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/contact"
                                active={location.pathname === '/contact'}
                            >
                                Contact Us
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                    <Form className="d-flex ms-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
