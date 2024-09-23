import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    let expan = width < 767? [false]: ["md"];

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" key={expan[0]} expand={expan[0]} className="navbar-css">
          <Container>
            <Navbar.Brand href="#" className="fs-4 fw-bold">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expan}`} />
            <Navbar.Offcanvas bg="dark" data-bs-theme="dark"
              id={`offcanvasNavbar-expand-${expan}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expan}`}
              placement="end"
              style={{height: "300px", width: "100%"}}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expan}`}>
                  logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{marginLeft: "20px"}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home" >Home</Nav.Link>
                  <Nav.Link href="#skillsID">
                    Skills
                  </Nav.Link>
                  <Nav.Link href="#myProjectsId" >Projects</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                <Row>
                  <Col>
                    <Nav.Link href="https://www.linkedin.com/in/ragab-sayed-581a7a255/"><FaLinkedinIn className="nav-icon"/></Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link ><FaFacebookF className="nav-icon" /></Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link ><CiInstagram className="nav-icon" /></Nav.Link>
                  </Col>
                  <Col xs={6}>
                    <Nav.Link href="#connectId"><Button variant="outline-light" className="btn-lg nav-btn">Let's Connect</Button></Nav.Link>
                  </Col>
                </Row>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default Header;