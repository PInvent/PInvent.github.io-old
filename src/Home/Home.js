import React, { Component } from "react";
import logo from "./../img/pinvent-logo.png";
import Navbars from "../Component/Navbars";
import "./../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <div className="home">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    );
  }
}

export default Home;
