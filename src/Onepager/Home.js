import React, { Component } from "react";
import logo from "./../img/pinvent-logo.png";
import "./../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home" id="/">
          <img src={logo} alt="logo" className="logo" />
          <p></p>
        </div>
      </div>
    );
  }
}

export default Home;
