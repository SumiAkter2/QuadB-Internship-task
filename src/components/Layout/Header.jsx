import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/quadb_tech-removebg-preview.png';
import './Header.css'

const Header = () => {
    return (
        <div >
      <Navbar className='nav-bg' expand="lg">
      <Container fluid>
                    <Navbar.Brand href="#">
                    <img src={logo} alt="Brand-logo" />
                    </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-link"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Log In</Nav.Link>
          
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search" variant="outline-dark"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark" className='fs-5 text-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
            </Navbar>
            </div>
  
    );
};

export default Header;