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
          <a href="https://wa.me/+60189709910?text=Hai%20PInvent,%20boleh%20bantu%20projek%20saya">
            <i className="fab fa-whatsapp" />
          </a>
          <a href="https://www.facebook.com/PInvent95/">
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
