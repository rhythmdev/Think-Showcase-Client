import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Root;
