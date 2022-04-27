import React from "react";
import { Navbar, Nav, Container, Image, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/G34.gif";
export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Col
            style={{
              width: "80px",
              height: "60px",
              backgroundColor: "transparent",
            }}
          >
            <Image src={logo} fluid />
          </Col>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
