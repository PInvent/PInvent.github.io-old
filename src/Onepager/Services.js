import React, { Component } from "react";
import "./../App.css";
import { Row, Col } from "react-bootstrap";
import { TEXT_SERVICES } from "../Util/Text";
// import img from "../img/pinvent-logo-wide.jpeg";
// import consultation from "../img/Services/consultation.png";
// import classes from "../img/Services/classes.png";
// import outsourcing from "../img/Services/outsourcing.png";
// import product from "../img/Services/product.png";

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

// let Cardsss = val => (
//   <div className="card-container">
//     <Card>
//       <Card.Img variant="top" src={val.img} />
//       <Card.Body>
//         <Card.Title>{val.title}</Card.Title>
//         <Card.Text>
//           lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id urna
//           vehicula
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </div>
// );

class Services extends Component {
  render() {
    return (
      <div id="services" className="container">
        <div className="white-box">
          <h1 className="title">{TEXT_SERVICES}</h1>
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
          {/* <Row>
            <Col lg={6} md={12}>
              <Cardsss title="Consultation" img={consultation} />
              <Cardsss title="Outsourcing" img={outsourcing}  />
            </Col>
            <Col lg={6} md={12}>
              <Cardsss title="Class" img={classes}  />
              <Cardsss title="Product" img={product}  />
            </Col>
          </Row> */}
        </div>
      </div>
    );
  }
}

export default Services;
