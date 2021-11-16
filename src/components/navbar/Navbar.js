import React from 'react';
import {Col, Container, Nav, Navbar} from 'react-bootstrap'
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import Avatar from "../avatar/Avatar";
import './Navbar.css';
import Contact from "../contact/Contact";

export const VerticalNavbar = (props) => {
    const {location} = props;

    return (
        <>
            <div className="d-none d-md-block py-sm-0 pt-md-3">
                <Avatar/>
            </div>
            <Navbar
                collapseOnSelect
                expand="sm"
            >
                <Container>
                    <div className="d-md-none">
                        <Contact/>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="py-sm-0 pt-md-5">
                        <Col>
                            <Nav
                                activeKey={location.pathname}
                                className="flex-column d-md-block text-center"
                                fill
                            >
                                <Nav.Item className="my-md-1">
                                    <NavLink to="/home" activeClassName="active" className="link d-md-none">
                                        HOME
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className="my-md-1">
                                    <NavLink to="/skills" activeClassName="active" className="link">
                                        SKILLS
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className="my-md-1">
                                    <NavLink to="/experience" activeClassName="active" className="link">
                                        EXPERIENCE
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className="my-md-1">
                                    <NavLink to="/projects" activeClassName="active" className="link">
                                        PROJECTS
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className="my-md-1">
                                    <NavLink to="/cv" activeClassName="active" className="link">
                                        CV
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item className="my-md-1">
                                    <NavLink to="/contact" activeClassName="active" className="link">
                                        CONTACT
                                    </NavLink>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-none d-md-inline-block footer-wrapper">
                <div className="footer">
                    GET IN TOUCH<br/>
                </div>
                <Contact/>
            </div>
        </>
    )
}

export const HeaderWithRouter = withRouter(VerticalNavbar);