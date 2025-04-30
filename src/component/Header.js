import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img src='/assets/images/logo.png' alt='Nexus logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto me-auto justify-content-center w-100"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/feature">Features</Nav.Link>
                        {/* <Nav.Link href="/benefits">Benefits</Nav.Link> */}
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Link to='contact-us' className="btn btn-primary header_btn">Contact Us</Link> 
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;