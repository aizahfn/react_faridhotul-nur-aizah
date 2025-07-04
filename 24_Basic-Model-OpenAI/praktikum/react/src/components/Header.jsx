import React from "react";
import "../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white">
        <Container>
          <Navbar.Brand href="#" style={{ fontWeight: "bold", color: "black" }}>
            Simple Header
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="awal" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="nav-link btn btn-primary active"
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link className="text-primary" href="/">
                Landing Page
              </Nav.Link>
              <Nav.Link className="text-primary" href="/create">
                Create Product
              </Nav.Link>
              <Nav.Link className="text-primary" href="/login">
                Login
              </Nav.Link>
              <Nav.Link className="text-primary" href="/chat">
                Chat Bot
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
