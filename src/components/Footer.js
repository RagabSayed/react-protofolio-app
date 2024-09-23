import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className="footer-sec">
            <Row className="footer-sec-cont">
                <Col>
                    <Navbar.Brand className="col-6" href="#" className="fs-4 fw-bold">LOGO</Navbar.Brand>
                </Col>
                <Col className="footer-tow-sec">
                        <Col className="d-flex mb-4 footer-icon">
                            <Nav.Link href="https://www.linkedin.com/in/ragab-sayed-581a7a255/"><FaLinkedinIn className="nav-icon"/></Nav.Link>
                            <Nav.Link href="#pricing"><FaFacebookF className="nav-icon" /></Nav.Link>
                            <Nav.Link href="#pricing"><CiInstagram className="nav-icon" /></Nav.Link>
                        </Col>
                        <Col className="copy-right">--CopyRights 2024 -- All Rights Reserved here By Ragab Sayed Ismail</Col>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;