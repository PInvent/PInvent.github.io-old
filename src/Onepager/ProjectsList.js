import React, { Component } from "react";
import "./../App.css";
import { Container, Row, Col } from "react-bootstrap";
import {} from "../Util/Text";

class ProjectsList extends Component {
  render() {
    return (
      <div id="projects" className="container">
        <div className="white-box">
          <h1 className="title">Projects</h1>

          <Container>
            <Row>
              <Col lg={4} md={12}>
                <div className="icon-container">
                  <i className="fas fa-charging-station" />
                </div>

                <h3>Electronics</h3>
                <p>Heart beat monitoring system</p>
                <p>Car blindspot detection system</p>
                <p>Automatic trolley followers</p>
                <p>Temperature controller system</p>
                <p>House security alarm system</p>
                <p>Object follower robot</p>
                <p>Traffic light system using labView</p>
                <p>Ultrasonic measurement device</p>
                <p>RFID attendance system</p>
              </Col>
              <Col lg={4} md={12}>
                <div className="icon-container">
                  <i className="fas fa-sim-card" />
                </div>

                <h3>IoT</h3>
                <p>Motorcycle tracker and anti-theft device</p>
                <p>Vending machine monitoring system</p>
                <p>Lawn mower (controlled by apps)</p>
                <p>Fall detector for elder</p>
                <p>Smart fertigation system</p>
                <p>Smart aquarium</p>
                <p>Smart bus monitoring system</p>
                <p>Water quality monitoring system</p>
                <p>Automatic dryer system</p>
                <p>GPS tracker system</p>
                <p>Cascaded temperature monitoring system</p>
                <p>Smart home</p>
                <p>Smart lighting system</p>
                <p>Vertical farming</p>
                <p>Hydroponic system</p>
                <p>Humidity and temperature monitoring</p>
                <p>Smart parking system</p>
              </Col>
              <Col lg={4} md={12}>
                <div className="icon-container">
                  <i className="fas fa-magic" />
                  {/* <i className="fas fa-id-badge" /> */}
                </div>
                
                <h3>Image processing</h3>
                <p>360 degree smart parking system</p>
                <p>Pedestrian detection</p>
                <p>Facial recognition system</p>
                <p>Speed trap system</p>
                <p>Barcode scanner system</p>
                <p>Smart elevator system</p>
                <p>Car detection</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
