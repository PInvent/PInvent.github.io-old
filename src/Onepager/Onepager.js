import React, { Component } from "react";
// import logo from "./../img/pinvent-logo.png";
import "./../App.css";
import Navbars from "../Component/Navbars";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Footer from "../Component/Footer";

class Onepager extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <div className="ui-onepager">
          <Home />
          <AboutUs />
          {/* <Services /> */}
          <ContactUs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Onepager;
