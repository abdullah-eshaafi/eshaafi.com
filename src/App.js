import React, { useState } from "react";
import "./App.css";
import eshaafi from "./Images/eShaafi.svg";
import { Container, Row, Col, Navbar, Nav, NavLink } from "react-bootstrap";

import { SidebarData } from "./Components/NavData";
import "bootstrap/dist/css/bootstrap.min.css";

import andriod from "./Images/andriod.png";
import apple from "./Images/apple.png";

import app from "./Images/app.png";

import white_dots from "./Images/white_dots.png";
function App() {
  const [selIndex, setSelectIndex] = useState(0);

  const handleChangeColor = (index, e) => {
    setSelectIndex(index);
  };
  return (
    <div>
      <div className="hero-main-wrapper">
        <Navbar bg="transparent">
          <Container>
            <Navbar.Brand to="/">
              <img src={eshaafi} alt="..."></img>
            </Navbar.Brand>
            <Nav>
              {SidebarData.map((data, index) => (
                <NavLink
                  to="#home"
                  className="navbar_links_wrapper"
                  onClick={(e) => handleChangeColor(index, e)}
                  style={{
                    color: selIndex === index ? "#009B93" : "#1e1e1e",
                  }}
                  key={index}
                >
                  {data.title}
                </NavLink>
              ))}
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="hero_main_wrapper">
                <div className="hero_text_heading">
                  <h3>Care that never quits</h3>
                </div>
                <div className="hero_text-para">
                  <p>
                    Revolutionising healthcare by connecting you with the best
                    practitioners across Pakistan, addressing all your
                    health-related matters
                  </p>
                </div>
                <div>
                  <div className="col-lg-6 d-flex justify-content-between">
                    <div className="col-lg-8">
                      <button className="btn-android">
                        <img src={andriod} alt="..."></img>
                      </button>
                    </div>
                    <div>
                      <button className="btn-apple">
                        <img src={apple} alt="..."></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <img src={app} alt="..."></img>
                  </div>
                  <div className="white_dots">
                    <img src={white_dots} alt="..."></img>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
