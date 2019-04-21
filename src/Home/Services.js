import React, { Component } from "react";
import "./../App.css";
import {  } from "react-bootstrap";
import Navbars from "../Component/Navbars";
import InConstruction from "../Component/InConstruction";
import { TEXT_SERVICES } from "../Util/Text";

class Services extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <div className="main-pages container">
          <p>{TEXT_SERVICES}</p>
          <InConstruction />
        </div>
      </div>
    );
  }
}

export default Services;
