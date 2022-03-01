import React, { useEffect } from "react";
import eshaafi from "../Images/eShaafi.svg";
import { Container, Navbar, Nav, Accordion, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function FAQ() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="privacy-policy-page-wrapper">
      <Navbar collapseOnSelect expand="lg" bg="white fixed-top">
        <Container>
          <Navbar.Brand to="/">
            <a href="/">
              <img src={eshaafi} alt="..."></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-links-warpeer">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/terms">Terms & Conditions</Nav.Link>
              <Nav.Link href="/Privacy">Privacy Policy</Nav.Link>

              <Nav.Link href="/FAQ">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="privacy_modal_header d-flex justify-content-center faqs-heading">
        <h2>FAQs</h2>
      </div>
      <Container>
        {" "}
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordian-heading">
              Is my payment secure?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              We use third-party service providers for online payment processing
              that enables your payment to be secure in accordance with the
              latest security standards.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordian-heading">
              Do you save credit card information?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              eShaafi doesn’t store any data related to credit cards, online
              wallets, bank accounts, and any other financial information.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accordian-heading">
              How secure are my personal details?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              eShaafi uses a secure socket layer (SSL) internet security
              protocol to ensure no one can access your personal or banking
              information.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="accordian-heading">
              What type of account can I use to pay online?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              You can use debit or credit cards, JazzCash and EasyPaisa to pay
              for your appointments.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="accordian-heading">
              Is there any service fee applicable on online payments?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              There are no additional service charges for making online
              payments.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header className="accordian-heading">
              Do I get a reimbursement in case of cancellation of my online
              appointment?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              Yes, please refer to the “Refund” section in Terms and Conditions.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="accordian-heading">
              What type of personal data is collected?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              To register at eShaafi, the following information is collected:
              <br></br> Phone number (Mandatory) <br></br> Name (Optional){" "}
              <br></br> Age (Optional) <br></br> Previous medical record
              (Optional) <br></br> Gender (Optional)
              <br></br> Email address (Optional)
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header className="accordian-heading">
              When is my information collected?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              Your information will be collected when you sign up on eshaafi.com
              or the eShaafi mobile app.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header className="accordian-heading">
              May I cancel my appointment?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              Yes, you can cancel an appointment two hours before the
              appointment time. You can cancel a maximum of three appointments
              in a day.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="9">
            <Accordion.Header className="accordian-heading">
              May I reschedule my appointment?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              Yes, you can reschedule your appointment two hours before the
              appointment time. And you can reschedule a maximum of three
              appointments in a day.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="10">
            <Accordion.Header className="accordian-heading">
              What happens if I am not available at the appointment time?
            </Accordion.Header>
            <Accordion.Body className="accordian-heading">
              If a patient doesn’t receive a call due to any reason, the patient
              can request to reschedule the appointment by contacting eShaafi
              support.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="terms-border-top">
          {" "}
          <Row>
            <Col lg={6}>
              <div className="col-lg-10 col-12 ">
                <ul className="footer_bootom d-flex justify-content-between">
                  <Link to="/terms" className="LINKS-MAIN-WRAPPER">
                    <li>Terms & Conditions</li>
                  </Link>

                  <Link to="/Privacy" className="LINKS-MAIN-WRAPPER">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to="/FAQ" className="LINKS-MAIN-WRAPPER">
                    <li>FAQs</li>
                  </Link>

                  <li>
                    <a
                      href="https://wa.me/923111088882"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="LINKS-MAIN-WRAPPER"
                    >
                      Help{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-md-end justify-content-center">
                <p>Copyright © 2022 • eShaafi.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default FAQ;
