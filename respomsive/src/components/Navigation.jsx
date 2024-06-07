import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <>
      <Navbar sticky="top" className="navbar-transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: "-14rem" }}>
            <img src={logo} alt="Logo" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ms-4 gap-4">
            <Nav>
              <Nav.Link className="links" href="/">Home</Nav.Link>
              <Nav.Link className="links" href="/about">About us</Nav.Link>
              <Nav.Link className="links" href="/services">Services</Nav.Link>
              <Nav.Link className="links" href="/blog">Blog</Nav.Link>
              <Nav.Link className="links" href="/pricing">Pricing</Nav.Link>
              <Nav.Link className="links" href="/contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
