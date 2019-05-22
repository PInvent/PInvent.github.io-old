import React, { Component } from "react";
import "./../App.css";
import { Row, Col, Button } from "react-bootstrap";
// import InConstruction from "../Component/InConstruction";
import {} from "../Util/Text";

let whatsapp = [
  {
    name: "Amir",
    number: "018-264 3734",
    num: "0182643734",
    location: "Perak"
  },
  {
    name: "Azman",
    number: "018-970 9910",
    num: "0189709910",
    location: "Perak"
  },
  {
    name: "Syahmi",
    number: "011-5917 3795",
    num: "01159173795",
    location: "Negeri Sembilan"
  },
  {
    name: "Imran",
    number: "018-322 4100",
    num: "0183224100",
    location: "Perak"
  },
  {
    name: "Saiful",
    number: "014-819 6655",
    num: "0148196655",
    location: "Terengganu"
  }
];

let preNum = "https://wa.me/+6";
let postNum = "?text=Hai%20PInvent,%20boleh%20bantu%20projek%20saya";

const contact = whatsapp.map(val => (
  // <div className="btn-long">
  <a href={preNum + val.num + postNum}>
    <Button className="btn-long whatsapp">
      <i className="fab fa-whatsapp" />
      <span className="name">{" " + val.name}</span>
      <span className="location">{" - " + val.location}</span>
      <p className="number">{val.number}</p>
    </Button>
  </a>
  // </div>
));

class ContactUs extends Component {
  render() {
    return (
      <div id="contact-us" className="container">
        <div className="white-box">
          <h2 className="title">Contact Us</h2>
          <Row>
            <Col lg={6} md={12}>
              <div className="btn-container">{contact}</div>
            </Col>
            <Col lg={6} md={12}>
              <a href="mailto:pisang.invent@gmail.com">
                <Button className="btn-long gmail">
                  <i className="far fa-envelope" />
                  <span> Email</span>
                  <p>pisang.invent@gmail.com</p>
                </Button>
              </a>
              <a href="https://www.facebook.com/PInvent95/">
                <Button className="btn-long facebook">
                  <i className="fab fa-facebook-f" />
                  <span> PInvent</span>
                  <p />
                </Button>
              </a>
              <a href="https://www.instagram.com/pinvent95/">
                <Button className="btn-long instagram">
                  <i className="fab fa-instagram" />
                  <span> PInvent</span>
                  <p />
                </Button>
              </a>
              <a href="https://twitter.com/PInvent95">
                <Button className="btn-long twitter">
                  <i className="fab fa-twitter" />
                  <span> PInvent</span>
                  <p />
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ContactUs;
