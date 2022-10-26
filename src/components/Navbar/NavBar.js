import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";

const NavBar = () => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    return setMode(!mode);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo-img" alt="logo" />

            <span className="logo-txt">Think ShowCase</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  fw-semibold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="">Courses</Nav.Link>
              <Nav.Link href="">FAQ</Nav.Link>
              <Nav.Link href="">Blog</Nav.Link>
              <Nav.Link href="">Login</Nav.Link>
              <Nav.Link>
                {mode ? (
                  <BsBrightnessHigh onClick={toggleMode} />
                ) : (
                  <BsMoon onClick={toggleMode} />
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
