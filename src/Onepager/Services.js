import React, { Component } from "react";
import "./../App.css";
import { Row, Col, Card } from "react-bootstrap";
import { TEXT_SERVICES } from "../Util/Text";
import img from "../img/pinvent-logo-wide.jpeg";

// let serv = [
//   {
//     title: "Consultation",
//     description: ""
//   },
//   {
//     title: "Outsourcing",
//     description: ""
//   },
//   {
//     title: "Class",
//     description: ""
//   },
//   {
//     title: "Product",
//     description: ""
//   }
// ];

let Cardsss = val => (
  <div className="card-container">
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        {/* <Card.Text>lorem ipsum de amet</Card.Text> */}
      </Card.Body>
    </Card>
  </div>
);

class Services extends Component {
  render() {
    return (
      <div id="services" className="container">
        <div className="white-box">
          <h2 className="title">{TEXT_SERVICES}</h2>

          <Row>
            <Col lg={6} md={12}>
              <Cardsss title="Consultation" />
              <Cardsss title="Outsourcing" />
            </Col>
            <Col lg={6} md={12}>
              <Cardsss title="Class" />
              <Cardsss title="Product" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Services;
