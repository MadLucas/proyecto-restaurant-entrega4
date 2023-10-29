import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigate() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Mi Cocina Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Reservas">Reservas</Nav.Link>
            <Nav.Link href="/Login">Iniciar sesión</Nav.Link>
            <NavDropdown title="Carta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Menu">Menu</NavDropdown.Item>
              <NavDropdown.Item href="/Bebestibles">Bebidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Nosotros">Nosotros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;