import React from 'react';
import {Container, Navbar, Nav, Col} from 'react-bootstrap'
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import Avatar from "../avatar/Avatar";
import './Navbar.css';
import Contact from "../contact/Contact";

export const VerticalNavbar = (props) => {
    const { location } = props;

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
                    <Navbar.Collapse id="responsive-navbar-nav" className="pt-1">
                        <Col>
                            <Nav
                                activeKey={location.pathname}
                                 className="flex-column d-md-block text-center"
                                 fill
                            >
                                <Nav.Item>
                                    <NavLink to="/skills" activeClassName="active" className="link">
                                        SKILLS
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/experience" activeClassName="active" className="link">
                                        EXPERIENCE
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/projects" activeClassName="active" className="link">
                                        PROJECTS
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/cv" activeClassName="active" className="link">
                                        CV
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/contact" activeClassName="active" className="link">
                                        CONTACT
                                    </NavLink>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-none d-md-inline-block footer">
                <div>
                    GET IN TOUCH<br />
                </div>
                <Contact />
            </div>
        </>
    )
}

export const HeaderWithRouter = withRouter(VerticalNavbar);

// export default VerticalNavbar;