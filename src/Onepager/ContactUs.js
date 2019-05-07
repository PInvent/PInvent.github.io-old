import React, { Component } from "react";
import "./../App.css";
import {} from "react-bootstrap";
import InConstruction from "../Component/InConstruction";
import {  } from "../Util/Text";

class ContactUs extends Component {
  render() {
    return (
      <div id="contact-us">
        <div className="main-pages container">
          <p>Contact Us</p>
          <InConstruction />
        </div>
      </div>
    );
  }
}

export default ContactUs;
