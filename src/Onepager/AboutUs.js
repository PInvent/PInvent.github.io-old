import React, { Component } from "react";
import "./../App.css";
import InConstruction from "../Component/InConstruction";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-us">
        <div className="main-pages container">
          <p>About us</p>
          <InConstruction />
        </div>
      </div>
    );
  }
}

export default AboutUs;
