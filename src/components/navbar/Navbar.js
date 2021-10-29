import React from 'react';
import {Container, Navbar, Nav, Col} from 'react-bootstrap'
import Avatar from "../avatar/Avatar";
import './Navbar.css';
import Contact from "../contact/Contact";

const VerticalNavbar = () => {
    return (
        <>
            <div className="d-none d-md-inline-block">
                <Avatar />
            </div>
            <Navbar
                collapseOnSelect
                expand="sm"
            >
                <Container>
                    <div className="d-md-none">
                        <Contact />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="pt-3">
                        <Col>
                            <Nav className="flex-column d-md-inline-block text-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="skills" href="/skills">Skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Link href="/experience">Experience</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/cv">CV</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-none d-md-inline-block pt-5">
                <div>
                    Get in touch...
                </div>
                <Contact />
            </div>
        </>
    )
}

export default VerticalNavbar;