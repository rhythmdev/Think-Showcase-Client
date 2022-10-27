import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaUserSecret } from "react-icons/fa";
import { Image } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    return setMode(!mode);
  };
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
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
              <>
                {user?.uid ? (
                  <>
                    <Nav.Link onClick={handelLogOut}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to={"/login"}>
                      Login
                    </Nav.Link>
                  </>
                )}
              </>

              <Nav.Link>
                {mode ? (
                  <BsBrightnessHigh onClick={toggleMode} />
                ) : (
                  <BsMoon onClick={toggleMode} />
                )}
              </Nav.Link>
              <>
                {user?.uid ? (
                  <Tippy
                    content={
                      user?.displayName ? user.displayName : "No name found"
                    }
                  >
                    <Image
                      style={{ height: "30px" }}
                      thumbnail
                      roundedCircle
                      className="mt-1 shadow-sm img-fluid"
                      src={user?.photoURL}
                    ></Image>
                  </Tippy>
                ) : (
                  <FaUserSecret className="mt-2"></FaUserSecret>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
