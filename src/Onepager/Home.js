import React, { Component } from "react";
import logo from "./../img/pinvent-logo.png";
import "./../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home" id="/">
          <img src={logo} alt="logo" className="logo" />
          {/* <h2 className="title">Saya anak Malaysia</h2> */}
        </div>
      </div>
    );
  }
}

export default Home;
