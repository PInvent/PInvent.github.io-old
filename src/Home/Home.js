import React, { Component } from "react";
import logo from "./../img/pinvent-logo.png";
import Navbar from "../Component/Navbar";
import "./../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    );
  }
}

export default Home;
