import React, { Component } from "react";
import "./../App.css";
import {} from "react-bootstrap";
import InConstruction from "../Component/InConstruction";
import { TEXT_SERVICES } from "../Util/Text";

class Services extends Component {
  render() {
    return (
      <div id="services">
        <div className="main-pages container">
          <h2 className="title">{TEXT_SERVICES}</h2>
          <InConstruction />
        </div>
      </div>
    );
  }
}

export default Services;
