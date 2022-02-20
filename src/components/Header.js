import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/mother">Ox,на мама!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/wantpregnant">искам да забременея</Nav.Link>
              <Nav.Link href="/pregnant">бременност</Nav.Link>

              <Nav.Link href="/babay">бебе</Nav.Link>
              <Nav.Link href="/baby1or2">дете 1-2</Nav.Link>

              <Nav.Link href="/baby3">дете 3+</Nav.Link>

              <Nav.Link href="/search">search</Nav.Link>
              <Nav.Link href="/login">вход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
