import blogImage from './blogImage.jpg'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import eshaafi from '../../Images/eShaafi.svg'
import { Link } from 'react-router-dom'
export default function BlogPost() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='white fixed-top'>
        <Container>
          <Navbar.Brand to='/'>
            <a href='/'>
              <img src={eshaafi} alt='...'></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto nav-links-warpeer'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className='container my-4 row-footer'
      
      >
        <div className='row blog-post-wrapper'>
          <div className='col-10'>
            <div className='d-flex flex-column w-100'>
              <div className='blog-Image'>
                <img src={blogImage} alt='' className='img-fluid' />
              </div>
              <div className='blogHeading my-3'>
                <h3 className='h1'>Why Health?</h3>
              </div>
              <div className='blogDetails'>
                <p className='text-justify lead'>
                  Pakistan has been facing serious healthcare issues since
                  decades. Unfortunately, the healthcare system needs major
                  revamping to achieve better standards of healthcare and even
                  healthcare for some. Pakistan ranks 154 among 195 countries in
                  healthcare. <br />
                  <br />
                  The local hospitals, nurses, doctors, and even facilities are
                  not enough to cater to all the underprivileged people in
                  Pakistan. Also, a long waiting time entertains our people when
                  health plans are surgical.
                  <br />
                  <br /> At the end of the waiting period, patients either face
                  adverse health complications or lose their life. Similarly,
                  many major flaws that project health problems our patients
                  face include inadequate healthcare facilities, clinics &
                  especially specialist physicians in the backward areas. <br />
                  <br />
                  Long-distance to commute hundreds of miles just to meet a
                  healthcare provider and stay on standby for treatment due to
                  limited resources and long queues. <br />
                  <br /> Considering these problems, eShaafi intends to
                  facilitate the patients by making a comprehensive healthcare
                  system via online means in which the patient gets online video
                  consultation with general physicians and specialist doctors at
                  the ease of their homes.
                  <br />
                  <br /> eShaafi helps care seekers to address their health
                  issues and play a major role in educating and treating people
                  for their health in general and their health problems in
                  detail.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='terms-border-top footer-position'>
          {' '}
          <Row>
            <Col lg={6}>
              <div className='col-lg-10 col-12 '>
                <ul className='footer_bootom d-flex justify-content-between'>
                  <Link to='/terms' className='LINKS-MAIN-WRAPPER'>
                    <li>Terms & Conditions</li>
                  </Link>

                  <Link to='/Privacy' className='LINKS-MAIN-WRAPPER'>
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to='/FAQ' className='LINKS-MAIN-WRAPPER'>
                    <li>FAQs</li>
                  </Link>

                  <li>
                    <a
                      href='https://wa.me/923111088882'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='LINKS-MAIN-WRAPPER'
                    >
                      Help{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className='d-flex justify-content-md-end justify-content-center'>
                <p>Copyright © 2022 • eShaafi.com</p>
              </div>
            </Col>
          </Row>
        </div> */}
      </div>
    </>
  )
}
