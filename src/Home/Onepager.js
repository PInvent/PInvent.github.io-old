import React, { Component } from "react";
// import logo from "./../img/pinvent-logo.png";
import Navbars from "../Component/Navbars";
import "./../App.css";
import Home from "./Home";

class Onepager extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <div className="home">
          <Home />
        </div>
      </div>
    );
  }
}

export default Onepager;
