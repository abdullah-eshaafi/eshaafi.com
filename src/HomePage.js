import React, { useState } from "react";
import "./App.css";
import eshaafi from "./Images/eShaafi.svg";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import andriod from "./Images/andriod.png";
import apple from "./Images/apple.png";
import app from "./Images/app.png";
import white_dots from "./Images/white_dots.png";
import comma from "./Images/comma.png";
import patient_img from "./Images/patient_img.png";
import patient_img2 from "./Images/patient_img2.png";

import icon1 from "./Images/icon1.png";
import icon2 from "./Images/icon2.png";
import icon3 from "./Images/icon3.png";
import doctor from "./Images/doctor.png";
import tik from "./Images/tik.png";
import inverted from "./Images/inverted.png";

import starts from "./Images/starts.png";
import video from "./Images/video.png";
import phone1 from "./Images/phone1.png";
import phone2 from "./Images/Phone2.png";
import final_logo from "./Images/final_logo.svg";
import message from "./Images/message.png";
import call from "./Images/call.png";
import address from "./Images/address.png";
import fb from "./Images/fb.png";
import twitter from "./Images/twitter.png";
import yt from "./Images/yt.png";
import linkdin from "./Images/linkdin.png";
import Frame from "./Images/Frame.png";

import leftarrow from "./Images/left-arrow.png";
import rightarrow from "./Images/right-arrow.png";

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  const values = [true];
  const [showP, setShowP] = useState(false);

  const [showF, setShowF] = useState(false);
  const [fullscreenF, setFullscreenF] = useState(true);
  const [fullscreen, setFullscreen] = useState(true);

  const [fullscreenP, setFullscreenP] = useState(true);
  const [show, setShow] = useState(false);

  const [maxNum, setMaxNum] = useState(parseInt(11));
  const [value, setValue] = useState("");
  const handlePhoneNumber = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^0-9,+]/gi, "");

    if (element.value.charAt(0) === "+") {
      setMaxNum(13);
    } else if (element.value.charAt(0) === "3") {
      setMaxNum(10);
    } else {
      setMaxNum(11);
    }
    setValue(element.value);
  };

  const handleSubmission = () => {
    if (value.charAt(0) === "+") {
      console.log("plus");
    } else if (value.charAt(0) === "3") {
      console.log("three");
    } else {
      console.log("hello");
    }
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function handleShowF(breakpoint) {
    setFullscreenF(breakpoint);
    setShowF(true);
  }

  function handleShowP(breakpoint) {
    setFullscreenP(breakpoint);
    setShowP(true);
  }
  const slides = [
    {
      id: 1,
      pic: "https://terafort.s3.ap-southeast-1.amazonaws.com/ilyas.PNG",
      title: "Ilyas",
      star: starts,
      link: "One of the best online doctor booking apps I have ever used. eShaafi app is easy to use, I have booked the appointment within a few minutes. Highly recommended.",
    },
    {
      id: 2,
      title: "Mrs. Khan",
      star: starts,
      pic: "https://terafort.s3.ap-southeast-1.amazonaws.com/user.PNG",
      link: "Thank you eShaafi for the exceptional services. I can’t imagine that I found such an exceptional physician through an online doctor booking app. Highly recommended to all of you.",
    },
    {
      id: 3,
      title: "Farhan Khan",
      star: starts,
      pic: "https://terafort.s3.ap-southeast-1.amazonaws.com/user.PNG",
      link: "Dr. Aqsa is a good listener. Instead of just prescribing medicines, she guides me to change my diet plan as well to get rid of the disease.Stay blessed doctor.",
    },
    {
      id: 4,
      title: "Ahmed",
      star: starts,
      pic: "https://terafort.s3.ap-southeast-1.amazonaws.com/ahmed.PNG",
      link: "Great online consultation experience with Dr. Aqsa in all aspects. Highly recommended.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div id="home">1</div>
      <div className="hero-main-wrapper">
        <Navbar collapseOnSelect expand="lg" bg="white fixed-top">
          <Container>
            <Navbar.Brand to="/">
              <a href="#home">
                <img src={eshaafi} alt="..."></img>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto nav-links-warpeer">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#why">Why Us?</Nav.Link>

                <Nav.Link href="#works">How It Works?</Nav.Link>
                <Nav.Link href="#Doctor">For Doctors</Nav.Link>

                <Nav.Link href="#about">About</Nav.Link>

                <Nav.Link href="#app">Get App</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="hero_main_wrapper">
                <div className="hero_text_heading d-lg-flex justify-content-lg-center justify-content-xl-start d-block">
                  <h3>Care that never quits</h3>
                </div>
                <div className="d-lg-flex justify-content-center d-block">
                  <div className="hero_text-para col-lg-7 col-xl-12 col-12">
                    <p>
                      Revolutionising healthcare by connecting you with the best
                      practitioners across Pakistan, addressing all your
                      health-related matters
                    </p>
                  </div>
                </div>

                <div
                  className="d-lg-flex justify-content-lg-center
            justify-content-xl-center d-xl-block"
                >
                  <div className="col-xl-6 col-lg-6 col-md-7 col-12 d-flex justify-content-between">
                    <div className="col-xl-8 col-lg-6">
                      <button className="btn-android">
                        <img src={andriod} alt="..." className="res-img"></img>
                      </button>
                    </div>
                    <div className="col-xl-8 col-lg-6  d-xl-block d-lg-flex justify-content-lg-end">
                      <button
                        className="btn-apple"
                        style={{ visibility: "hidden" }}
                      >
                        <img src={apple} alt="..." className="res-img"></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="app-img-wrapper">
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
      <div id="why"></div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="invert-comma-section-wrapper">
              <div className="inverted_comma_wrapper">
                <img src={comma} alt=".."></img>
              </div>
              <div className="col-lg-9 d-flex justify-content-center inverted_comma_text">
                <div className="col-lg-10 eshaafi_section-para">
                  <p>
                    eShaafi is a Pakistan based telehealth company lined up to
                    provide virtual healthcare services, at your consolation.
                    Keeping in view the effort and time it takes to visit the
                    doctor, eShaafi provides an unmatched doctor-patient
                    experience through an online consultation platform which
                    allows real time meetings and consultations with your doctor
                    whenever and wherever you want.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div>
              <div className="telehealth-heading col-lg-6">
                <h3>Why Choose Telehealth?</h3>
              </div>
              <div className="d-flex justify-content-center align-items-center First-card-spacing">
                <div className="white_dots_wrapper">
                  <img src={white_dots} alt="..."></img>
                </div>
                <div className="col-lg-7 card-main-wrapper card-second-wrapper">
                  <div className="d-flex justify-content-center eshaafi-card_img-wrapper">
                    <img src={patient_img2} alt="..."></img>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="eshaafi-card-heading">
                      <h4>24/7 Consultation</h4>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <div className="eshaafi-card-para eshaafi-card-para-spacing col-lg-10">
                      <p>
                        Through telehealth, patients don’t have to travel or
                        wait for hours in the waiting hall to see their doctors.
                        Your device can incorporate a whole hospital in itself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <div className="d-flex justify-content-center">
                <div className="col-lg-7 card-main-wrapper card-wrapper">
                  <div className="d-flex justify-content-center eshaafi-card_img-wrapper">
                    <img src={patient_img} alt="..."></img>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="eshaafi-card-heading">
                      <h4>Remote Healthcare</h4>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <div className="eshaafi-card-para col-lg-10">
                      <p>
                        Telehealth is becoming the virtual hospital every
                        patient wants to visit. One doesn’t need to go through
                        the same hassle of visitng a clinic or a hospital
                        physically, thus making healthcare a convenient
                        experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="white_dots_wrapper">
                  <img src={white_dots} alt="..."></img>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-center">
                <div className="col-lg-7 card-main-wrapper card-wrapper">
                  <div className="d-flex justify-content-center eshaafi-card_img-wrapper">
                    <img src={Frame} alt="..."></img>
                  </div>
                  <div className="col-lg-7 d-flex ">
                    <div className="eshaafi-card-heading">
                      <h4>Digital Records</h4>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <div className="eshaafi-card-para col-lg-10">
                      <p>
                        eShaafi app allow you to save your medical records
                        online so you don’t have to carry those every time you
                        consult a doctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="white_dots_wrapper_ d-xl-flex align-items-xl-end">
                  <img src={white_dots} alt="..."></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div id="works">1</div>
      <Row>
        <Col>
          <div className="how_it_work_wrapper">
            <div className="col-lg-12">
              <div className="col-lg-12 how_it_works_text">
                <h4>How it works</h4>
              </div>
            </div>
            <Container>
              <div className="col-lg-12 d-lg-flex d-block three_points_wrapper">
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="col-lg-12 text-center margin_bootom_wrapper">
                    <div className="how_it_works_img text-center">
                      <img src={icon1} alt="...."></img>
                    </div>
                    <div className="how_it_works-heading text-center">
                      <h5>Create an account</h5>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="how_it_works-text  text-center col-lg-6">
                        <p>Sign up for free & access all features on our app</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="col-lg-12 text-center margin_bootom_wrapper">
                    <div className="how_it_works_img text-center">
                      <img src={icon2} alt="...."></img>
                    </div>
                    <div className="how_it_works-heading text-center">
                      <h5>Book appointment</h5>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="how_it_works-text  text-center col-lg-6">
                        <p>
                          Search specialist doctors & book appointment instantly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="col-lg-12 text-center margin_bootom_wrapper">
                    <div className="how_it_works_img text-center">
                      <img src={icon3} alt="...."></img>
                    </div>
                    <div className="how_it_works-heading text-center">
                      <h5>Enjoy a healthly life</h5>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="how_it_works-text  text-center col-lg-6">
                        <p>
                          eShaafi cares for your health, and is always with you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
      <Container id="Doctor">
        <Row>
          <Col>
            <div className="Doctor_wrapper">
              <h6>Are you a doctor?</h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="Image_wrapper d-flex justify-content-xl-start justify-content-center">
              <img src={doctor} alt="..."></img>
            </div>
          </Col>
          <Col xl={6}>
            <div className="d-flex justify-content-center Doctor-app-main-wrapper">
              <div className="d-cotor-app-container">
                <div className="doctor-app-wrapper">
                  <h5>With Our Doctor App</h5>
                </div>
                <div>
                  <ul className="doctor-list-wrapper">
                    <div className="d-flex">
                      <div>
                        <img
                          src={tik}
                          alt="..."
                          className="img-tik-wrapper"
                        ></img>
                      </div>
                      <li>Connect to more patients through online bookings</li>
                    </div>

                    <div className="d-flex">
                      <div>
                        <img
                          src={tik}
                          alt="..."
                          className="img-tik-wrapper"
                        ></img>
                      </div>
                      <li> Upload and manage your schedule with ease</li>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          src={tik}
                          alt="..."
                          className="img-tik-wrapper"
                        ></img>
                      </div>
                      <li>Introducing vacation mode for doctors</li>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          src={tik}
                          alt="..."
                          className="img-tik-wrapper"
                        ></img>
                      </div>
                      <li>Manage patients better with eShaafi Doctor App</li>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          src={tik}
                          alt="..."
                          className="img-tik-wrapper"
                        ></img>
                      </div>
                      <li>View shared medical history of patients</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>{" "}
      <div id="about"></div>
      <Row>
        <Col xl={6} className="satisfied-wrapper">
          <div className="d-flex justify-content-center col-lg-12">
            <div className="satisfied-wrapper-heading col-lg-5">
              <h4>Satisfied Patients</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center  col-lg-12">
            <div className="satisfied-wrapper-text col-10 col-lg-5">
              <h4>
                Feedback from these satisfied users helps us in reaching new
                heights
              </h4>
            </div>
          </div>
        </Col>
        <Col xl={6} className="reviwes-wrapper px-0">
          <div className="col-lg-9 col-12 reviews-card-wrapper">
            <div className="d-flex justify-content-end reviwes-inverted-img">
              <img src={inverted} alt=".."></img>
            </div>
            <div>
              <div className="d-flex stars-img-text-wrapper">
                {/* <div className="review-lady-img">
              <img src={slides[currentSlide].pic} alt="..."></img>
            </div> */}
                <div>
                  <div className="review-heading-wrapper">
                    <h4>{slides[currentSlide].title}</h4>
                  </div>
                  <div className="reviews-starts">
                    <img src={slides[currentSlide].star} alt="..."></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="reviews-para-wrapper">
                <p>{slides[currentSlide].link}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-1 d-flex justify-content-around">
                <div>
                  <button onClick={slidePrev} className="left-arrow">
                    <img src={leftarrow} alt=".."></img>
                  </button>
                </div>
                <div>
                  <button onClick={slideNext} className="left-arrow">
                    <img src={rightarrow} alt="..."></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="vision-video">
                  <img src={video} alt="..." className="img-fluid"></img>
                </div>
                <div className="vision-text-first">
                  <p>
                    eShaafi envisions transforming healthcare facilities,
                    providing personalised care for your body as well as your
                    mind through an online platform to see your desired doctor
                    anytime from anywhere in the world.
                  </p>
                </div>
                <div className="vision-text-first vision-last-spacing">
                  <p>
                    By providing high value patient centered care and advancing
                    the outreach to obtain high clinical results and connecting
                    patients and doctors via technological platforms for the
                    betterment of clinical care and outcomes that can be
                    measured for further improvements is what eShaafi envisage.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div id="app"></div>
      <div className="Get-eShaafi-App">
        <Container>
          <Row>
            <Col>
              <div className="Get-eShaafi-App-wrapper">
                <div className="Get-eShaafi-App-heading">
                  <h4>Get eShaafi App</h4>
                </div>
                <div className="Get-eShaafi-App-para col-lg-10">
                  <p>
                    Download the app to book and manage your appointments, keep
                    track of the payments and get instant medical advice in case
                    of emergencies. Keep your health up to date.
                  </p>
                </div>
                <div className="Get-eShaafi-App-download">
                  <h5>Get the link to download app</h5>
                </div>
                <div className="Get-eShaafi-App-input col-lg-8 d-flex">
                  <input
                    type="text"
                    value={value}
                    placeholder="Phone Number"
                    onChange={handlePhoneNumber}
                    min="11"
                    maxLength={maxNum}
                  />
                  <button onClick={handleSubmission}>Get Link</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-between Get-eShaafi-App-btn">
                  <div className="col-lg-8">
                    <button className="btn-android">
                      <img
                        src={andriod}
                        alt="..."
                        className="apple-world"
                      ></img>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn-apple"
                      style={{ visibility: "hidden" }}
                    >
                      <img src={apple} alt="..." className="apple-world"></img>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="images-wrapper">
              <div className="d-flex">
                {" "}
                <div>
                  <img src={phone1} alt="..."></img>
                </div>
                <div className="Get-eShaafi-App-second-image">
                  <img src={phone2} alt="..."></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="Footer">
          <Col md={6}>
            <div className="footer-main-wrapper">
              <div className="footer-image-wrapper">
                <a href="#home">
                  <img src={final_logo} alt="..."></img>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-main-wrapper">
              <div
                className="col-lg-8 col-12 d-lg-flex
          justify-content-between d-block"
              >
                <div className="d-flex">
                  <div className="footer-images">
                    <img src={call} alt=""></img>
                  </div>
                  <div className="footer-phone">
                    <p>+92 301 1166 523</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="footer-images">
                    <img src={message} alt=""></img>
                  </div>
                  <div className="footer-phone">
                    <p>contact@eshaafi.com</p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="footer-images">
                  <img src={address} alt="..."></img>{" "}
                </div>
                <div className="footer-phone">
                  <p>
                    eShaafi, Third Floor, The Plaza 100, MM ALam Road, Gulberg,
                    Lahore
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-md-between justify-content-around col-lg-4 youtube_links">
                <div className="fb-footer-icon">
                  <a
                    href="https://www.facebook.com/eShaaficare/?ref=pages_you_manage&_rdc=1&_rdr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fb} alt="..."></img>
                  </a>{" "}
                </div>
                <div>
                  <a
                    href="https://twitter.com/eshaafi_com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="..."></img>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/31094337/admin/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkdin} alt="..."></img>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCdWmvFCT1nU5sir48rBFGDw/featured"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={yt} alt="..."></img>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div>
          <Modal
            show={showF}
            fullscreen={fullscreenF}
            onHide={() => setShowF(false)}
          >
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body></Modal.Body>
          </Modal>
        </div>
        <Row>
          <Col lg={6}>
            <div className="col-lg-10 col-12 ">
              <ul className="footer_bootom d-flex justify-content-between">
                <Link to="terms" className="LINKS-MAIN-WRAPPER">
                  <li>Terms</li>
                </Link>

                <Link to="Privacy" className="LINKS-MAIN-WRAPPER">
                  <li>Privacy</li>
                </Link>
                <Link to="FAQ" className="LINKS-MAIN-WRAPPER">
                  <li>FAQs</li>
                </Link>

                <li>Help</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-md-end justify-content-center">
              <p>Copyright © 2022 • eShaafi.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
