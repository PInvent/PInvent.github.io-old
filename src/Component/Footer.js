import React, { Component } from "react";
import "./../App.css";
import {} from "../Util/Text";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer" id="footer">
        {/* <p>this is footer</p> */}
        <div className="icon-container">
          <a href="/#">
            <i className="fas fa-hashtag" />
          </a>
          <a href="/#">
            <i className="fab fa-whatsapp" />
          </a>
          <a href="/#">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/pinvent95/">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/PInvent95">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
