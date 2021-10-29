import React from 'react';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap'
import Avatar from "../avatar/Avatar";
import './Navbar2.css';
import Contact from "../contact/Contact";

const Navbar2 = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                // fixed="top"
                expand="sm"
                // bg="dark"
                variant="dark"
            >
                <Container fluid>
                    <a className="navbar-brand d-md-none" href="/">Vertical Navbar</a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Row>
                            <Col className="d-none d-md-flex">
                                <Avatar />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Nav className="flex-column">
                                    <Nav.Link eventKey="skills" href="/skills">Skills</Nav.Link>
                                    <Nav.Link href="/experience">Experience</Nav.Link>
                                    <Nav.Link href="/projects">Projects</Nav.Link>
                                    <Nav.Link href="/cv">CV</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-none d-md-">
                                <Contact />
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
)
}

export default Navbar2;

{/*<nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
{/*    /!*<a className="navbar-brand" href="/">Vertical Navbar</a>*!/*/}
{/*    <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
{/*            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"*/}
{/*            aria-label="Toggle navigation">*/}
{/*        /!*<span className="navbar-toggler-icon"></span>*!/*/}
{/*    </button>*/}
{/*    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}

{/*    <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
{/*        <ul className="navbar-nav mr-auto flex-column vertical-nav">*/}
{/*            <li className="nav-item">*/}
{/*                <a className="nav-link" href="/">Dashboard</a>*/}
{/*            </li>*/}
{/*            <li className="nav-item">*/}
{/*                <a className="nav-link" href="/">Pages</a>*/}
{/*            </li>*/}
{/*            <li className="nav-item">*/}
{/*                <a className="nav-link" href="/">Link</a>*/}
{/*            </li>*/}
{/*            /!*</ul>*!/*/}
{/*            <li className="nav-item">*/}
{/*                <a className="nav-link" href="/">Another Link</a>*/}
{/*            </li>*/}
{/*            <li className="nav-item">*/}
{/*                <a className="nav-link" href="/">Setting</a>*/}
{/*            </li>*/}
{/*        </ul>*/}
{/*    </div>*/}
{/*</nav>*/}

