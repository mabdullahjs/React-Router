import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link style={{textDecoration:"none" , color
          :"black" , paddingLeft:"1rem" , fontSize:"1.5rem"}} to="/">React-Router</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{textDecoration:"none" , color
          :"black" , paddingLeft:"1rem"}} to="/">Home</Link>
            <Link style={{textDecoration:"none" , color
          :"black" , paddingLeft:"1rem"}} to="about">About</Link>
            <Link style={{textDecoration:"none" , color
          :"black" , paddingLeft:"1rem"}} to="service">Service</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;