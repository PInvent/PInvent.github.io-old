import React, { Component } from "react";
import "./../App.css";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-us">
        <div className="main-pages container">
          <h2 className="title">About us</h2>
          <div>
            <h3>Who we are,</h3>
            <p>
              P stands for Pisang (pronounce - Pishang) which means bored in
              malay urban dictionary.
            </p>
            <p>
              Yes, we are bunch of misfits that are bored with our lives and
              sincerely giving our time to:
            </p>
            <p>Assist you in inventing your projects</p>
            <p>I know you hate coding - let us do it for you,</p>
            <p>or</p>
            <p>Let us make everything for you.</p>
            <p>
              We are pro in (This is not self-claimed, you can ask our customers
              *shrug*):
            </p>
            <ul>
              <li>Arduino</li>
              <li>Raspberry Pie</li>
              <li>Image Processing</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
