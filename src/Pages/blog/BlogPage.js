import blogImage from './blogImage.jpg'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import eshaafi from '../../Images/eShaafi.svg'
const blogPosts = [
  {
    cardImage: blogImage,
    cardHeading: 'Why Health?',
    cardDescription:
      'Pakistan has been facing serious healthcare issues since decades. Unfortunately...',
    date: 'Mar 17, 2022',
    readTime: '3 min read',
  },
]
function Card() {
  return (
    <>
      {blogPosts.map((card) => (
        <div
          className='card my-2'
          style={{ width: '18rem' }}
          key={card.cardHeading}
        >
          <img className='card-img-top' src={card.cardImage} alt='' />
          <div className='card-body'>
            <h5 className='card-title'>{card.cardHeading}</h5>
            <p className='card-text'>{card.cardDescription}</p>
            <Link
              to='/blog/whyhealth'
              className='btn'
              style={{ background: '#009B94', color: '#fff' }}
            >
              Read more
            </Link>
          </div>
          <div
            className='card-body d-flex justify-content-between '
            style={{ color: '#aaa' }}
          >
            <span>{card.date}</span>
            <span>{card.readTime}</span>
          </div>
        </div>
      ))}
    </>
  )
}
export default function Blog() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='white fixed-top'>
        <Container>
          <Navbar.Brand to='/'>
            <a href='#home'>
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
      <div className='container my-4' style={{ paddingTop: '100px' }}>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card />
          </div>
          {/* <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card />
          </div> */}
        </div>
      </div>
    </>
  )
}
