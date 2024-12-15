import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3 shadow">
      <Navbar.Brand as={NavLink} to="/" className="fs-4 fw-bold text-uppercase text-warning">
        Marvel Universe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link 
            as={NavLink} 
            to="/" 
            className="text-light px-3"
            style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#ffc107' } : undefined)}
          >
            Home Page
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to="/character-list" 
            className="text-light px-3"
            style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#ffc107' } : undefined)}
          >
            Browse Characters
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to="/character-details" 
            className="text-light px-3"
            style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#ffc107' } : undefined)}
          >
            Character Details
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

