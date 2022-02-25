import React, { useState, useEffect } from "react";
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
import review from "./Images/review.png";
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

function App() {
  const values = [true];
  const [lgShow, setLgShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const slides = [
    {
      id: 1,
      link: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch.",
    },
    {
      id: 2,
      link: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
    },
    {
      id: 3,
      link: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch.",
    },
    {
      id: 4,
      link: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
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
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div style={{ overflow: "hidden" }}>
      <div id="home">1</div>
      <div className="hero-main-wrapper">
        <Navbar bg="white fixed-top" expand="xl">
          <Container>
            <Navbar.Brand to="/">
              <a href="#home">
                <img src={eshaafi} alt="..."></img>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 nav-links-warpeer"
                navbarScroll
              >
                <a href="#home">Home</a>
                <a href="#why">Why Us?</a>
                <a href="#works">How It Works?</a>
                <a href="#Doctor">For Doctors</a>
                <a href="#about">About</a>
                <a href="#app">Get App</a>
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
                      <button className="btn-apple">
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
                <div className="review-lady-img">
                  {/* <img src={review} alt="..."></img> */}
                </div>
                <div>
                  <div className="review-heading-wrapper">
                    <h4>Jenny Wilson</h4>
                  </div>
                  <div className="reviews-starts">
                    <img src={starts} alt="..."></img>
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
                  <input type="text" placeholder="Phone Number"></input>{" "}
                  <button>Get Link</button>
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
                    <button className="btn-apple">
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
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    <div className="privacy_modal_header d-flex justify-content-center">
                      <h2>Terms & Conditions</h2>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        Welcome to eShaafi! We are dedicated to enabling and
                        empowering you to make smart choices for your health and
                        well-being. Our mission is to provide you with a
                        platform that empowers you to seek personalized and
                        pertinent health advice and support your doctor-patient
                        relationship by making it more accessible, affordable,
                        and intelligent. Here you can find all the terms and
                        conditions that we apply in order to provide our
                        services as defined below at the optimum level of our
                        standards.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        As a condition of your use of any of our platforms, you
                        warrant that you are at least 18 years of age. We only
                        accept prescription orders from customers who are 18
                        years old or over although they may order prescriptions
                        for persons who are under 18. By placing an order, you
                        confirm that you are at least 18. If you do not meet the
                        minimum age requirement, you must immediately
                        discontinue your use and access to the website.
                      </p>
                    </div>

                    <div className="privacy_modal_text_bold">
                      <p className="user-select">
                        PLEASE READ THE FOLLOWING TERMS AND CONDITIONS
                        CAREFULLY. THESE CONTAIN IMPORTANT INFORMATION ABOUT
                        YOUR RIGHTS AND OBLIGATIONS AS WELL AS LIMITATIONS AND
                        EXCLUSIONS THAT APPLY TO OUR SERVICES.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">1. Introduction</h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        Terafort, under the brand "eShaafi", is the author and
                        publisher of the internet resource www.eshaafi.com and
                        the mobile application “eShaafi” together. eShaafi owns
                        and operates the services provided through the website.
                        These terms and conditions apply to the customer who
                        utilizes any of the services offered by eShaafi through
                        any of its platforms (web, app, and/or call centre).
                      </p>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        Kindly read these terms and conditions carefully. By
                        authorizing a payment to eShaafi through the online
                        payment service, it would be treated as a deemed
                        acceptance of these terms and conditions. eShaafi
                        reserves all the rights to amend these terms and
                        conditions at any time without giving prior notice. It
                        is the responsibility of the customers to read the terms
                        and conditions before using the services.
                      </p>
                    </div>
                    <div className="collection_of_data">
                      <h4 className="user-select">2. Payments</h4>
                    </div>

                    <div>
                      <ul className="privacy_modal_text privacy-modal-list-text">
                        <li className="user-select">
                          Before using the service, it is recommended that the
                          customer shall make a necessary inquiry about the
                          charges or fees payable against the Credit/Debit Card
                          used from Credit Card or the Debit Card service
                          provider i.e. the respective Bank as the payment(s)
                          can be made via Credit Card, Debit Card, Mobile
                          Wallets, Internet Banking, and other digital payment
                          methods.
                        </li>
                        <li className="user-select">
                          The Credit Card information supplied at the time of
                          using the service is processed by the payment gateway
                          of the service provider and is not supplied to
                          eShaafi. It is the sole responsibility of the customer
                          to ensure that the information entered in the relevant
                          fields is correct.
                        </li>

                        <li className="user-select">
                          It is recommended that you take and retain a copy of
                          the transaction for record-keeping purposes, which
                          might assist in the resolution of any disputes that
                          may arise out or usage of the service.
                        </li>

                        <li className="user-select">
                          To save the rights, treasure, or personal safety of
                          the Organization, it’s Users or the general public
                        </li>
                        <li className="user-select">
                          When Company is making any change in control,
                          including by means of combine, acquisition or purchase
                          of all or substantially all of the assets of Company
                        </li>
                        <li className="user-select">
                          The customer agrees, understands, and confirms that
                          his/her personal data including without limitation
                          details relating to debit card / credit card / net
                          banking transmitted over the internet may be
                          susceptible to misuse, hacking, theft, and/or fraud
                          and that eShaafi or the Payment Service Provider(s)
                          have no control over such matters.
                        </li>
                        <li className="user-select">
                          The service is provided using a payment gateway
                          service provider through a secure website. However,
                          neither the payment gateway service provider nor
                          eShaafi gives any assurance that the information
                          provided online by the patient is secured or may be
                          read or intercepted by a third party.
                        </li>
                        <li className="user-select">
                          eShaafi does not accept or assume any liability in the
                          event of such unauthorized interception, hacking, or
                          other unauthorized access to information provided by a
                          customer of the service.
                        </li>

                        <li className="user-select">
                          eShaafi and/or the Payment Service Providers shall not
                          be liable for any inaccuracy, error or delay in, or
                          omission of (a) any data, information or message (b)
                          the transmission or delivery of any such data,
                          information or message or (c) any loss or damage
                          arising from or occasioned by any such inaccuracy,
                          error, delay or omission, non-performance or
                          interruption in any such data, information or message
                        </li>

                        <li className="user-select">
                          Under no circumstances shall eShaafi and/or the
                          Payment Service Providers, its employees, directors,
                          and its third-party agents involved in processing,
                          delivering, or managing the services, be liable for
                          any direct, indirect, incidental, special or
                          consequential damages, or any damages whatsoever,
                          including punitive or exemplary arising out of or in
                          any way connected with the provision of or any
                          inadequacy or deficiency in the provision of the
                          services or resulting from unauthorized access or
                          alteration of transmissions of data or arising from
                          suspension or termination of the service.
                        </li>

                        <li className="user-select">
                          The customer agrees that eShaafi or any of its
                          employees will not be held liable by the customer for
                          any loss or damages arising from your use of, or
                          reliance upon the information contained on the
                          website, or any failure to comply with these Terms and
                          Conditions where such failure is due to circumstances
                          beyond eShaafi’s reasonable control like Debit/Credit
                          Card, Bank Account Details, etc.
                        </li>

                        <li className="user-select">
                          The customer agrees that the debit/credit card details
                          provided by him/her for use of the aforesaid
                          service(s) must be correct and accurate and that the
                          customer shall not use a Debit/Credit Card that is not
                          lawfully owned by him/her or the use of which is not
                          authorized by the lawful owner thereof
                        </li>

                        <li className="user-select">
                          The customer further agrees and undertakes to provide
                          correct and valid Debit/Credit Card details
                        </li>

                        <li className="user-select">
                          The customer is responsible to ensure that card or
                          bank account details provided by him/her are accurate
                        </li>

                        <li className="user-select">
                          The customer is responsible to ensure that sufficient
                          credit is available on the nominated card/bank account
                          at the time of making the payment to permit the
                          payment of the dues payable or fees dues selected by
                          the customer inclusive of the applicable fee
                        </li>
                      </ul>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">3. Cancellation Policy</h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        For any online prepaid appointment, the customer can
                        cancel his/her scheduled appointment without any charges
                        two hours before the appointment. In such cases, we will
                        refund the amount paid for the appointment subject to
                        bank charges and other deductions by third parties.
                        Appointment cancellation has to be carried out by the
                        customer. We do not entertain cancellation requests from
                        in-direct customer references. However, a patient cannot
                        cancel more than three appointments in a day.
                      </p>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        Occasionally, appointments may be cancelled or postponed
                        by the Third Party Service Provider(s) (Doctor, Clinic,
                        Hospital, Lab, etc.). If this occurs, the customer may
                        reschedule the appointment as per their convenience.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">
                        4. Rescheduling of Prepaid Appointments
                      </h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        A patient may reschedule his/her appointment i.e. book
                        an appointment for a different date and time with the
                        same Third Party Service Provider for the same type of
                        healthcare service till two hours before the
                        appointment. A patient can reschedule three appointments
                        at max per day.
                      </p>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        All reschedule requests will be subject to bank
                        processing fee and these charges will be applied. In the
                        case of rescheduling, if there is any difference in the
                        charges for the rescheduled appointment, we will
                        collect/refund the differential amount from/to the
                        customer.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">
                        5. Refunds & Exchange Policy
                      </h4>
                    </div>
                    <div className="privacy_modal_text ">
                      <p className="user-select">
                        Upon receipt of a valid cancellation request (two hours
                        before the appointment time), the amount will be
                        transferred to the patient’s eShaafi wallet. No
                        refunds/cancellation requests shall be entertained in
                        case of payment against bills / services received.
                      </p>
                    </div>

                    <div className="collection_of_data privacy-modal-text-margin">
                      <h4 className="user-select">5.1 No warranty</h4>
                    </div>
                    <div className="privacy_modal_text privacy-modal-text-margin">
                      <p className="user-select">
                        No warranty, representation, or guarantee, express or
                        implied is given by eshaafi in respect of the operation
                        of the service.
                      </p>
                    </div>

                    <div className="collection_of_data privacy-modal-text-margin">
                      <h4 className="user-select">5.2 Governing law</h4>
                    </div>
                    <div className="privacy_modal_text privacy-modal-text-margin">
                      <p className="user-select">
                        These terms and conditions are governed by the laws of
                        Pakistan and the competent courts at Lahore shall have
                        exclusive jurisdiction.
                      </p>
                    </div>

                    <div className="collection_of_data privacy-modal-text-margin">
                      <h4 className="user-select">5.3 Dispute Resolution</h4>
                    </div>
                    <div className="privacy_modal_text privacy-modal-text-margin">
                      <p className="user-select">
                        Any dispute arising in relation to the terms and
                        conditions will be submitted to a sole arbitrator
                        appointed by eshaafi under the provisions of the
                        Arbitration Act, 1940, and any applicable rules
                        thereunder. The venue of Arbitration shall be Lahore.
                      </p>
                    </div>

                    <div className="collection_of_data privacy-modal-text-margin">
                      <h4 className="user-select">5.4 Security</h4>
                    </div>
                    <div className="privacy_modal_text privacy-modal-text-margin">
                      <p className="user-select">
                        All payment details which are entered through the
                        payment gateway are encrypted when the customer enters
                        them. eshaafi shall not be liable for any failure by the
                        customer making the payment to properly protect data
                        from being seen on their screen by other persons or
                        otherwise obtained by such other persons during or after
                        the online payment process.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">
                        6. Variations to the Terms and Conditions
                      </h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        eShaafi reserves the right to vary these Terms and
                        Conditions from time to time and the latest version will
                        be published on this website. eShaafi also reserves the
                        right to decline the acceptance of any online payment
                        without assigning any reason.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">
                        7. Service delivery policy
                      </h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        eShaafi provides a digital network that functions as a
                        marketplace where persons “users” who seek personal
                        healthcare services or other services can be matched
                        with persons including “Doctors” who can provide the
                        services. Any decision by a user to make use of or
                        accept services is a decision made at such user’s sole
                        discretion.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        Each service provided by a Doctor or other third-party
                        provider to a user shall constitute a separate agreement
                        between such persons. In the case of virtual service
                        (i.e. online video consultation) provided by a Doctor or
                        other third-party provider, eShaafi and the third-party
                        service provider will try to provide the best service to
                        users. A virtual visit is not a physical visit and in
                        the case of a virtual visit eShaafi and the third-party
                        service provider(s) cannot be held liable for any direct
                        or indirect loss to the users.
                      </p>
                    </div>

                    <div className="collection_of_data">
                      <h4 className="user-select">8. Eligibility</h4>
                    </div>
                    <div className="privacy_modal_text">
                      <p className="user-select">
                        You must be 18 years of age or over to use the eShaafi
                        app/web and its services. If you are between the ages of
                        13 and 18, you can use the site or services only under
                        the supervision of your parent or guardian who has
                        agreed to the Terms of Use.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        If you are under the age of 13, you may not use the site
                        or services. If you are the parent or legal guardian of
                        a child under the age of 18, you may use the site or
                        services on behalf of such a minor child.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        By using the Site or Services on behalf of a minor
                        child, you represent and warrant that you are the parent
                        or legal guardian of such child and that all references
                        in these Terms and Consitions to “you” shall refer to
                        such child or such other individual for whom you have
                        the authorization to enter into these Terms and
                        Conditions on their behalf.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        If you do not qualify under these terms, do not use the
                        site or services. Membership in the services is void
                        where prohibited by applicable law, and the right to
                        access the site is revoked in such jurisdictions.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        By using the site and/or the services, you represent and
                        warrant that you have the right, authority, and capacity
                        to enter into these Terms of Use and to abide by all of
                        the terms and conditions set forth herein.
                      </p>
                    </div>

                    <div className="privacy_modal_text">
                      <p className="user-select">
                        The Site is administered in Pakistan and intended for
                        Pakistani users. Any use outside of Pakistan is at the
                        users’ own risk and users are responsible for compliance
                        with any local laws applicable to their use of the
                        services or the site.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
        <Row>
          <Col lg={6}>
            <div className="col-lg-10 col-12 ">
              <ul className="footer_bootom d-flex justify-content-between">
                {values.map((v, idx) => (
                  <li key={idx} onClick={() => handleShow(v)}>
                    Terms & Conditions
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </li>
                ))}
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Help</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-end">
              <p>Copyright © 2022 • eShaafi.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
