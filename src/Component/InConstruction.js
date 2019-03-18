import React, { Component } from "react";
import "./../App.css";
import {
  TEXT_IN_CONSTRUCTION,
  TEXT_CONSTRUCTION_DESCRIPTION
} from "../Util/Text";

class InConstruction extends Component {
  render() {
    return (
      <div className="in-construction">
        <i className="fas fa-hard-hat icon" />
        <h2>{TEXT_IN_CONSTRUCTION}</h2>
        <span>{TEXT_CONSTRUCTION_DESCRIPTION}</span>
      </div>
    );
  }
}

export default InConstruction;
