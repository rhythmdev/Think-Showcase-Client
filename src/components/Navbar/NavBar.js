import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

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

            <span className="logo-txt">Think Showcase</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  fw-semibold">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/courses"}>
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to={"/faq"}>
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to={"/blog"}>
                Blog
              </Nav.Link>

              <Nav.Link as={Link} to={"login"}>
                Login
              </Nav.Link>
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
