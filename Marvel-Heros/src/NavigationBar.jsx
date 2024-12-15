import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Marvel Universe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home Page</Nav.Link>
          <Nav.Link as={Link} to="/character-list">Browse Characters</Nav.Link>
          <Nav.Link as={Link} to="/character-details">Character Details</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}