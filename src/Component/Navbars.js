import React, { Component } from "react";
import "./../App.css";
import { Navbar, Nav } from "react-bootstrap";
import {
  TEXT_PINVENT,
  TEXT_HOME,
  TEXT_SERVICES,
  TEXT_ABOUT_US
} from "../Util/Text";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="/">{TEXT_PINVENT}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">{TEXT_HOME}</Nav.Link>
              <Nav.Link href="/services">{TEXT_SERVICES}</Nav.Link>
              <Nav.Link href="/about-us">{TEXT_ABOUT_US}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
