import React, { Component } from "react";
import "./../App.css";
import { Row, Col } from "react-bootstrap";
import { TEXT_SERVICES } from "../Util/Text";

class Services extends Component {
  render() {
    return (
      <div id="services" className="container">
        <div className="white-box">
          <h2 className="title">{TEXT_SERVICES}</h2>
          <Row>
            <Col lg={6} md={12}>
              <h4>Consultation</h4>
              <h4>Outsourcing</h4>
            </Col>
            <Col lg={6} md={12}>
              <h4>Class</h4>
              <h4>Product</h4>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Services;
