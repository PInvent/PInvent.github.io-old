import React, { Component } from "react";
import "./../App.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/services">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
