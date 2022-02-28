import React, { useEffect } from "react";

import eshaafi from "../Images/eShaafi.svg";
import { Container, Row, Col, Navbar, Nav, Accordion } from "react-bootstrap";
function Privacy() {
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
              <Nav.Link href="/Privacy">Privacy</Nav.Link>

              <Nav.Link href="/Terms">Terms & Conditions</Nav.Link>
              <Nav.Link href="/FAQ">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <div className="privacy_modal_header d-flex justify-content-center faqs-heading">
              <h2>PRIVACY POLICY</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="privacy_modal_text">
              <p className="user-select">
                Welcome to the eShaafi privacy policy. In this Privacy Policy,
                we explain
              </p>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  The ways we collect user data and why we do so
                </li>
                <li className="user-select">How we use user information</li>

                <li className="user-select">
                  The choices you have about your personal data
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">HOW TO CONTACT US</h4>
            </div>
            <div className="privacy_modal_text">
              <p className="user-select">
                If you have any questions about this privacy policy, contact our
                privacy team including our data protection officer by simply
                sending an email to contact@eshaafi.com or calling us at +92
                30111 66523
              </p>
            </div>

            {/* 
  //jhere */}

            <div className="collection_of_data">
              <h4 className="user-select">
                1. WHO CAN ACCESS YOUR INFORMATION
              </h4>
            </div>
            <div className="privacy_modal_text ">
              <p className="user-select">
                Apart from eShaafi, your data can be accessed by others in the
                following situations:
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">1.1 Partners Working For eShaafi</h4>
            </div>
            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                eShaafi has partners to perform certain services on our behalf.
                These partners process your data according to eShaafi
                instructions in order to provide services such as hosting,
                patient support, advertising, analytics, and fraud prevention.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">
                1.2 Other Companies & Public Authorities
              </h4>
            </div>
            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  To combat fraud and illegal activity, we may exchange data
                  with other companies and organizations and provide it to
                  public authorities in response to lawful requests
                </li>
                <li className="user-select">
                  We may also disclose your data based on your consent to comply
                  with the law or to protect the rights, property, or safety of
                  us, our patients, doctors and others
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">2. INFORMATION WE COLLECT</h4>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">2.1 Information You Provide Us</h4>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  Contact information (such as your name, phone number,
                  residential and email address)
                </li>
                <li className="user-select">
                  Your birthdate, age, gender and occupation
                </li>
                <li className="user-select">Your username and password</li>
                <li className="user-select">Previous medical record</li>

                <li className="user-select">
                  Profile information (such as a profile picture)
                </li>

                <li className="user-select">
                  Information that you provide when seeking help from our
                  customer service (such as chat logs, contact details e.g.,
                  your phone number, and email address if necessary to resolve
                  your request)
                </li>

                <li className="user-select">
                  Personally identifiable information you voluntarily provide
                  when you take a survey, poll, enter a contest, or other
                  promotional purposes
                </li>

                <li className="user-select">
                  Other information you provide us (such as information used to
                  identify a lost account or update your information)
                </li>
              </ul>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">
                2.2 Information we automatically collect from you while using
                our services
              </h4>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  IP address and device identifiers such as device ID,
                  advertising ID, IMEI, URL through which you accessed our site,
                  which URL you next go to
                </li>
                <li className="user-select">
                  Information about your device (such as device name, operating
                  system, browser information including browser type and the
                  language you prefer)
                </li>

                <li className="user-select">
                  Information we collect using cookies and similar technologies
                </li>

                <li className="user-select">General geolocation information</li>
                <li className="user-select">
                  Precise geolocation information (GPS) if you configure your
                  device location settings
                </li>
                <li className="user-select">Patient ID</li>
              </ul>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">
                2.3 Information we obtain from our partners (Advertisers,
                Publishers, Billing Partners, Ad Network Providers)
              </h4>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  Information from billing and distribution partners
                </li>
                <li className="user-select">
                  Information for advertising and analytics purposes so we can
                  provide you with better services
                </li>

                <li className="user-select">
                  Information we obtain from Ad network providers
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">3. HOW WE USE YOUR INFORMATION</h4>
            </div>

            <div className="privacy_modal_text ">
              <p className="user-select">
                We use this information to do internal research on our users’
                demographics, interests, and behaviour to better understand,
                protect, and serve our patients. We also use this information to
                offer you tailored content like giving you more relevant search
                results. This information is compiled and analyzed on an
                aggregated basis. Our automated system analyzes your content
                (including emails) to provide you with personally relevant
                product features such as customized search results, tailored
                advertising, and spam and malware detection.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">4. INFORMATION WE SHARE</h4>
            </div>

            <div className="privacy_modal_text ">
              <p className="user-select">
                We may use your aggregate information for market research to
                make our services better. We may share your information with our
                clients, affiliates, charity partners, and third parties for
                advertising and promotional purposes. Individual answers from
                you to questions within programs marked as ‘confidential’ may be
                shared with our affiliates, clients, and business partners but
                those answers will not be labelled with or linked to your
                personal information.
              </p>
            </div>

            <div className="privacy_modal_text ">
              <p className="user-select">
                Your user name, city, profile photo, publicly declared
                preferences, and some of your activity may be shared with other
                users. You may also see such information related to other users
                of the application when logged into the platform.
              </p>
            </div>

            <div className="privacy_modal_text ">
              <p className="user-select">
                Your personal information will also be shared with companies,
                organizations, or individuals outside the company if we have a
                good-faith belief that access, use, preservation, or disclosure
                of the information is reasonably necessary to
              </p>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  Meet any applicable law, regulation, legal process, or
                  enforceable governmental request
                </li>
                <li className="user-select">
                  Enforce applicable Terms of Service, including investigation
                  of potential violations
                </li>

                <li className="user-select">
                  Detect, prevent, or otherwise address fraud, security, or
                  technical issues
                </li>

                <li className="user-select">
                  Protect against harm to the rights, property, safety of the
                  company, our users, or the public as required or permitted by
                  law
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                5. WHY WE COLLECT YOUR INFORMATION
              </h4>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  To communicate necessary account and product/service related
                  information from time to time
                </li>
                <li className="user-select">
                  To allow you to receive quality customer care services
                </li>

                <li className="user-select">
                  To undertake necessary fraud and money laundering prevention
                  checks and comply with the highest security standards
                </li>

                <li className="user-select">
                  To comply with applicable laws, rules, and regulations
                </li>
                <li className="user-select">
                  To provide you with information and offers on products and
                  services related to updates, promotions, affiliated or
                  associated service providers, and partners that we believe
                  would be of interest to you
                </li>

                <li className="user-select">
                  If any service requested by you involves a third party, such
                  information is reasonably necessary for us to carry out your
                  service request that may be shared with a third party
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                6. WHAT TYPES OF INFORMATION DO WE COLLECT
              </h4>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">6.1 Financial Information</h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                The patients have to choose to provide payment-related financial
                information to us including (credit card, debit card, bank
                account details, billing address, etc.). We are committed to
                keeping all such sensitive data/information safe at all times
                and ensuring that such data/information is only transacted over
                secure or approved payment gateways which are digitally
                encrypted, and provide the highest possible degree of care
                available under the technology presently in use. In addition, if
                you desire to pay for bills via our Sites or Services, we may
                require that you provide to us your financial and billing
                information, such as billing name and address, credit card
                number, or bank account information, and if you choose to pay by
                credit card, credit card information such as type of credit
                card, name on card, card number, validation number, and
                expiration date. We may retain any transactional information as
                long as is necessary to fulfill the purposes specified in this
                Privacy Policy and for recordkeeping, subject to statutory or
                regulatory retention requirements and legitimate business needs
                such as for order tracking and status retrieval purposes. To the
                extent possible, we provide you the option of not divulging any
                specific information that you wish for us not to collect, store
                or use. You may also choose not to use a particular service or
                feature on the platform and opt-out of any non-essential
                communications from the company.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">6.2 Medical Information</h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                "Medical information" is any information, data, or documentation
                relating to a user's mental or physical condition. It includes
                but is not limited to oral, written, or digital information
                concerning a user's mental or physical condition, medical
                records, dental, disability records, user's compensation and
                medical leave records, genetic information, and information
                concerning visits or payments to any health care professional,
                hospital, emergency room, or other types of short or long-term
                health care facility. We may share your medical information with
                third-party "business associates" that perform various
                activities (for example, billing, transcription services). We
                may disclose to a member of your family, a relative, a close
                friend, or any other person you identify, your medical
                information that directly relates to that person's involvement
                in your health care or payment for your care. If you are unable
                to agree or object to such a disclosure, we may disclose such
                information as necessary if we determine that it is in your best
                interest based on our professional judgement. We may, if we deem
                fit, use or disclose medical information to notify or assist in
                notifying a family member, personal representative, or any other
                person that is responsible for your care, your location, and
                general condition. Finally, we may use or disclose your medical
                information to an authorized public or private entity to assist
                in disaster relief efforts and to coordinate uses and
                disclosures to family or other individuals involved in your
                health care. Furthermore, we may use or disclose your medical
                information in an emergency treatment situation.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">6.3 Personal Account Information</h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin">
              <p className="user-select">
                Transacting over the internet has inherent risks which can only
                be avoided by following security practices yourself. That’s why
                we caution and advise you not to reveal any information to any
                other person. In case of any suspicious activity to your account
                or where your account has/may have been compromised, please
                report it to our customer care team on an immediate basis.
                Whenever you use our services, we aim to provide you with access
                to your personal information. If that information is wrong, we
                strive to give you ways to update it quickly or to delete it
                unless we have to keep that information for legitimate business
                or legal purposes. We aim to maintain our services in a manner
                that protects information from accidental or malicious
                destruction. Because of this, after you delete information from
                our services, we may not immediately delete residual copies from
                our active servers and may not remove information from our
                backup systems.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                7 CORRECTION AND UPGRADATION OF PATIENT’S INFORMATION
              </h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                You may have certain rights relating to your personal
                information subject to local data protection law. We aim to
                provide you with access to your personal information. If that
                information is wrong, we strive to give you ways to update it
                quickly or to delete it unless we have to keep that information
                for legitimate business or legal purposes. Subject to applicable
                law, you may obtain a copy of the personal information we
                maintain about you or you may update or correct inaccuracies in
                that information by contacting us. To help protect your privacy
                and maintain security, we will take steps to verify your
                identity before granting you access to the information. In
                addition, if you believe that the personal information we
                maintain about you is inaccurate subject to applicable law, then
                you can request us to correct or amend the information or you
                may do so online by yourself. Alternatively, you may contact the
                company to correct or update such information by sending an
                email to contact@eshaafi.com. In the event you wish to report a
                breach of this policy, you may contact us on +92 30 111 66 523
                or email us at contact@eshaafi.com.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">8. TRANSPARENCY AND CHOICES</h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                People have different privacy concerns. Our goal is to be clear
                about what information we collect so that you can make
                meaningful choices about how it is used. For example, you can
              </p>
            </div>

            <div>
              <ul className="privacy_modal_text privacy-modal-list-text privacy-modal-text-margin">
                <li className="user-select">
                  Review and control certain types of information tied to your
                  account by using platform
                </li>
                <li className="user-select">
                  View and edit your preferences about the ads shown to you on
                  the platform such as which categories might interest you using
                  ads settings. You can also visit that page to opt-out of
                  certain platform advertising services
                </li>

                <li className="user-select">
                  You may also set your browser to block all cookies associated
                  with our services to indicate when a cookie is being set by
                  us. However, it is important to remember that many of our
                  services may not function properly if your cookies are
                  disabled
                </li>
              </ul>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">9. AGE LIMITS</h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                You are not allowed to use our services if you are under the age
                of 18 and our services are not directed at children under the
                age of 18.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                10. COMPLIANCE WITH REGULATORY AUTHORITIES
              </h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                We regularly review our compliance with our policy. When we
                receive any formal written complaints, we contact the person who
                made the complaint to follow up. We work with the relevant
                authorities to resolve the complaints on a priority basis.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">
                10. COMPLIANCE WITH REGULATORY AUTHORITIES
              </h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                We regularly review our compliance with our policy. When we
                receive any formal written complaints, we contact the person who
                made the complaint to follow up. We work with the relevant
                authorities to resolve the complaints on a priority basis.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">
                10.1 COPPA (Children Online Privacy Protection Act)
              </h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin ">
              <p className="user-select">
                eShaafi strictly abides by the guidelines set by the Children's
                Online Privacy Protection Act (COPPA) managed by the Federal
                Trade Commission (FTC). Therefore, we do not intend to market
                our services to children under the age of 13 years.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">10.2 Copyrights</h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin ">
              <p className="user-select">
                All the images, content, videos, layout, graphics, articles on
                eShaafi.com, and the eShaafi mobile app is the sole property of
                eShaafi. Therefore the unfair usage, or duplication of such
                content whether full or partial is prohibited under copyright
                laws that will apply to any individual or organization who
                illegally uses such content for their personal or financial
                benefit. All Rights Reserved.
              </p>
            </div>

            <div className="collection_of_data privacy-modal-text-margin">
              <h4 className="user-select">10.3 Data Theft</h4>
            </div>

            <div className="privacy_modal_text privacy-modal-text-margin ">
              <p className="user-select">
                The data present on the eShaafi website and the eShaafi app
                belongs exclusively to eShaafi and hence is not meant to be
                unfairly used or collected by third parties. eShaafi reserves
                the right to take legal action against any individual, party, or
                organization found to be engaging in the illegal practice of
                data theft whether on eShaafi.com or the mobile app.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">11 YOUR RIGHTS AND OPTIONS</h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                You have the right to correct/update your data, object to how we
                use or share your data, and the right to restrict how we use or
                share your data.
              </p>
            </div>

            <div className="collection_of_data">
              <h4 className="user-select">12 CHANGES IN OUR PRIVACY POLICY</h4>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                Our policy is incorporated into the Terms and Conditions of the
                platform and is subject to change from time to time without any
                prior notice. In case of any significant changes, we may
                intimate you of a prominent notification that will appear on the
                platform. We will also keep our prior version of the privacy
                policy in an archive for your review. It is strongly recommended
                that you periodically review our policy as posted on the
                platform. You may “opt-out” from receiving communications from
                us and/or sharing your personal information with us at any time.
              </p>
            </div>

            <div className="privacy_modal_text">
              <p className="user-select">
                <strong> Note: </strong>We will not ask you to share any
                sensitive data or information via email or telephone. If you
                receive any such request by email or phone, please do not
                respond/divulge any sensitive data or information and forward
                the information to contact@eshaafi.com for necessary action.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Privacy;
