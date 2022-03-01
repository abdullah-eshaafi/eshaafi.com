import React, { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import eshaafi from "../Images/eShaafi.svg";
import { Link } from "react-router-dom";
function Terms() {
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
      <Container>
        <Row>
          <Col>
            <div className="privacy_modal_header d-flex justify-content-center faqs-heading">
              <h2>Terms & Conditions</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="privacy_modal_text">
              <p className="user-select">
                Welcome to eShaafi! We are dedicated to enabling and empowering
                you to make smart choices for your health and well-being. Our
                mission is to provide you with a platform that empowers you to
                seek personalized and pertinent health advice and support your
                doctor-patient relationship by making it more accessible,
                affordable, and intelligent. Here you can find all the terms and
                conditions that we apply in order to provide our services as
                defined below at the optimum level of our standards.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                As a condition of your use of any of our platforms, you warrant
                that you are at least 18 years of age. We only accept
                prescription orders from customers who are 18 years old or over
                although they may order prescriptions for persons who are under
                18. By placing an order, you confirm that you are at least 18.
                If you do not meet the minimum age requirement, you must
                immediately discontinue your use and access to the website.
              </p>
            </div>

            <div className="privacy_modal_text_bold">
              <p className="user-select">
                PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY. THESE
                CONTAIN IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS
                AS WELL AS LIMITATIONS AND EXCLUSIONS THAT APPLY TO OUR
                SERVICES.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">1. Introduction</h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                Terafort, under the brand "eShaafi", is the author and publisher
                of the internet resource www.eshaafi.com and the mobile
                application “eShaafi” together. eShaafi owns and operates the
                services provided through the website. These terms and
                conditions apply to the customer who utilizes any of the
                services offered by eShaafi through any of its platforms (web,
                app, and/or call centre).
              </p>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                Kindly read these terms and conditions carefully. By authorizing
                a payment to eShaafi through the online payment service, it
                would be treated as a deemed acceptance of these terms and
                conditions. eShaafi reserves all the rights to amend these terms
                and conditions at any time without giving prior notice. It is
                the responsibility of the customers to read the terms and
                conditions before using the services.
              </p>
            </div>
            <div className="collection_of_data">
              <h4 className="user-select">2. Payments</h4>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text">
                <li className="user-select">
                  Before using the service, it is recommended that the customer
                  shall make a necessary inquiry about the charges or fees
                  payable against the Credit/Debit Card used from Credit Card or
                  the Debit Card service provider i.e. the respective Bank as
                  the payment(s) can be made via Credit Card, Debit Card, Mobile
                  Wallets, Internet Banking, and other digital payment methods.
                </li>
                <li className="user-select">
                  The Credit Card information supplied at the time of using the
                  service is processed by the payment gateway of the service
                  provider and is not supplied to eShaafi. It is the sole
                  responsibility of the customer to ensure that the information
                  entered in the relevant fields is correct.
                </li>

                <li className="user-select">
                  It is recommended that you take and retain a copy of the
                  transaction for record-keeping purposes, which might assist in
                  the resolution of any disputes that may arise out or usage of
                  the service.
                </li>

                <li className="user-select">
                  To save the rights, treasure, or personal safety of the
                  Organization, it’s Users or the general public
                </li>
                <li className="user-select">
                  When Company is making any change in control, including by
                  means of combine, acquisition or purchase of all or
                  substantially all of the assets of Company
                </li>
                <li className="user-select">
                  The customer agrees, understands, and confirms that his/her
                  personal data including without limitation details relating to
                  debit card / credit card / net banking transmitted over the
                  internet may be susceptible to misuse, hacking, theft, and/or
                  fraud and that eShaafi or the Payment Service Provider(s) have
                  no control over such matters.
                </li>
                <li className="user-select">
                  The service is provided using a payment gateway service
                  provider through a secure website. However, neither the
                  payment gateway service provider nor eShaafi gives any
                  assurance that the information provided online by the patient
                  is secured or may be read or intercepted by a third party.
                </li>
                <li className="user-select">
                  eShaafi does not accept or assume any liability in the event
                  of such unauthorized interception, hacking, or other
                  unauthorized access to information provided by a customer of
                  the service.
                </li>

                <li className="user-select">
                  eShaafi and/or the Payment Service Providers shall not be
                  liable for any inaccuracy, error or delay in, or omission of
                  (a) any data, information or message (b) the transmission or
                  delivery of any such data, information or message or (c) any
                  loss or damage arising from or occasioned by any such
                  inaccuracy, error, delay or omission, non-performance or
                  interruption in any such data, information or message
                </li>

                <li className="user-select">
                  Under no circumstances shall eShaafi and/or the Payment
                  Service Providers, its employees, directors, and its
                  third-party agents involved in processing, delivering, or
                  managing the services, be liable for any direct, indirect,
                  incidental, special or consequential damages, or any damages
                  whatsoever, including punitive or exemplary arising out of or
                  in any way connected with the provision of or any inadequacy
                  or deficiency in the provision of the services or resulting
                  from unauthorized access or alteration of transmissions of
                  data or arising from suspension or termination of the service.
                </li>

                <li className="user-select">
                  The customer agrees that eShaafi or any of its employees will
                  not be held liable by the customer for any loss or damages
                  arising from your use of, or reliance upon the information
                  contained on the website, or any failure to comply with these
                  Terms and Conditions where such failure is due to
                  circumstances beyond eShaafi’s reasonable control like
                  Debit/Credit Card, Bank Account Details, etc.
                </li>

                <li className="user-select">
                  The customer agrees that the debit/credit card details
                  provided by him/her for use of the aforesaid service(s) must
                  be correct and accurate and that the customer shall not use a
                  Debit/Credit Card that is not lawfully owned by him/her or the
                  use of which is not authorized by the lawful owner thereof
                </li>

                <li className="user-select">
                  The customer further agrees and undertakes to provide correct
                  and valid Debit/Credit Card details
                </li>

                <li className="user-select">
                  The customer is responsible to ensure that card or bank
                  account details provided by him/her are accurate
                </li>

                <li className="user-select">
                  The customer is responsible to ensure that sufficient credit
                  is available on the nominated card/bank account at the time of
                  making the payment to permit the payment of the dues payable
                  or fees dues selected by the customer inclusive of the
                  applicable fee
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">3. Cancellation Policy</h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                For any online prepaid appointment, the customer can cancel
                his/her scheduled appointment without any charges two hours
                before the appointment. In such cases, we will refund the amount
                paid for the appointment subject to bank charges and other
                deductions by third parties. Appointment cancellation has to be
                carried out by the customer. We do not entertain cancellation
                requests from in-direct customer references. However, a patient
                cannot cancel more than three appointments in a day.
              </p>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                Occasionally, appointments may be cancelled or postponed by the
                Third Party Service Provider(s) (Doctor, Clinic, Hospital, Lab,
                etc.). If this occurs, the customer may reschedule the
                appointment as per their convenience.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                4. Rescheduling of Prepaid Appointments
              </h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                A patient may reschedule his/her appointment i.e. book an
                appointment for a different date and time with the same Third
                Party Service Provider for the same type of healthcare service
                till two hours before the appointment. A patient can reschedule
                three appointments at max per day.
              </p>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                All reschedule requests will be subject to bank processing fee
                and these charges will be applied. In the case of rescheduling,
                if there is any difference in the charges for the rescheduled
                appointment, we will collect/refund the differential amount
                from/to the customer.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">5. Refunds & Exchange Policy</h4>
            </div>
            <div className="privacy_modal_text ">
              <p className="user-select">
                Upon receipt of a valid cancellation request (two hours before
                the appointment time), the amount will be transferred to the
                patient’s eShaafi wallet. No refunds/cancellation requests shall
                be entertained in case of payment against bills / services
                received.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">5.1 No warranty</h4>
            </div>
            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                No warranty, representation, or guarantee, express or implied is
                given by eshaafi in respect of the operation of the service.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">5.2 Governing law</h4>
            </div>
            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                These terms and conditions are governed by the laws of Pakistan
                and the competent courts at Lahore shall have exclusive
                jurisdiction.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">5.3 Dispute Resolution</h4>
            </div>
            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                Any dispute arising in relation to the terms and conditions will
                be submitted to a sole arbitrator appointed by eshaafi under the
                provisions of the Arbitration Act, 1940, and any applicable
                rules thereunder. The venue of Arbitration shall be Lahore.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">5.4 Security</h4>
            </div>
            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                All payment details which are entered through the payment
                gateway are encrypted when the customer enters them. eshaafi
                shall not be liable for any failure by the customer making the
                payment to properly protect data from being seen on their screen
                by other persons or otherwise obtained by such other persons
                during or after the online payment process.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                6. Variations to the Terms and Conditions
              </h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                eShaafi reserves the right to vary these Terms and Conditions
                from time to time and the latest version will be published on
                this website. eShaafi also reserves the right to decline the
                acceptance of any online payment without assigning any reason.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">7. Service delivery policy</h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                eShaafi provides a digital network that functions as a
                marketplace where persons “users” who seek personal healthcare
                services or other services can be matched with persons including
                “Doctors” who can provide the services. Any decision by a user
                to make use of or accept services is a decision made at such
                user’s sole discretion.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                Each service provided by a Doctor or other third-party provider
                to a user shall constitute a separate agreement between such
                persons. In the case of virtual service (i.e. online video
                consultation) provided by a Doctor or other third-party
                provider, eShaafi and the third-party service provider will try
                to provide the best service to users. A virtual visit is not a
                physical visit and in the case of a virtual visit eShaafi and
                the third-party service provider(s) cannot be held liable for
                any direct or indirect loss to the users.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">8. Eligibility</h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                You must be 18 years of age or over to use the eShaafi app/web
                and its services. If you are between the ages of 13 and 18, you
                can use the site or services only under the supervision of your
                parent or guardian who has agreed to the Terms of Use.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                If you are under the age of 13, you may not use the site or
                services. If you are the parent or legal guardian of a child
                under the age of 18, you may use the site or services on behalf
                of such a minor child.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                By using the Site or Services on behalf of a minor child, you
                represent and warrant that you are the parent or legal guardian
                of such child and that all references in these Terms and
                Consitions to “you” shall refer to such child or such other
                individual for whom you have the authorization to enter into
                these Terms and Conditions on their behalf.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                If you do not qualify under these terms, do not use the site or
                services. Membership in the services is void where prohibited by
                applicable law, and the right to access the site is revoked in
                such jurisdictions.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                By using the site and/or the services, you represent and warrant
                that you have the right, authority, and capacity to enter into
                these Terms of Use and to abide by all of the terms and
                conditions set forth herein.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                The Site is administered in Pakistan and intended for Pakistani
                users. Any use outside of Pakistan is at the users’ own risk and
                users are responsible for compliance with any local laws
                applicable to their use of the services or the site.
              </p>
            </div>
          </Col>
        </Row>
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

export default Terms;
