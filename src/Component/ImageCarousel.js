import React, { Component } from "react";
import "./../App.css";
import { Carousel } from "react-bootstrap";
import {} from "../Util/Text";
import logo1 from "./../img/pinvent-logo.png";
import logo2 from "./../img/pinvent-logo-only.jpeg";
import logo3 from "./../img/pinvent-logo-wide.jpeg";

class ImageCarousel extends Component {
  render() {
    return (
      <div id="">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ImageCarousel;
