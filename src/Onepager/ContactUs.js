import React, { Component } from "react";
import "./../App.css";
import {} from "react-bootstrap";
// import InConstruction from "../Component/InConstruction";
import {} from "../Util/Text";

let whatsapp = [
  {
    name: "Amir",
    number: "018-264 3734",
    location: "Perak"
  },
  {
    name: "Azman",
    number: "018-970 9910",
    location: "Perak"
  },
  {
    name: "Syahmi",
    number: "011-5917 3795",
    location: "Negeri Sembilan"
  },
  {
    name: "Imran",
    number: "018-322 4100",
    location: "Perak"
  },
  {
    name: "Saiful",
    number: "014-819 6655",
    location: "Terengganu"
  }
];

const contact = whatsapp.map(val => (
  <div>
    <i className="fab fa-whatsapp" />
    <span className="name">{" " + val.name}</span>
    <span className="location">{" - " + val.location}</span>
    <p className="number">{val.number}</p>
  </div>
));

class ContactUs extends Component {
  render() {
    return (
      <div id="contact-us">
        <div className="main-pages container">
          <h2 className="title">Contact Us</h2>
          <i className="fas fa-at" /> <span>Email</span>
          <p>pisang.invent@gmail.com</p>
          {contact}
        </div>
      </div>
    );
  }
}

export default ContactUs;
