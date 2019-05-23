import React, { Component } from "react";
// import logo from "./../img/pinvent-logo.png";
import "./../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home container" id="/">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h1 className="title">
            Jom
            <br />
            Pi<span className="transparent">sang</span>
            <br />
            Invent
            <br />
            bersama
            <br />
            kami
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
