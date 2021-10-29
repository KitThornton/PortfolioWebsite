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
                    <Navbar.Collapse id="responsive-navbar-nav" className="pt-3">
                        <Col>
                            <Nav
                                activeKey={location.pathname}
                                 className="flex-column d-md-block text-center"
                                 fill
                            >
                                <Nav.Item>
                                    <NavLink to="/skills" activeClassName="active">
                                        Skills
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/experience" activeClassName="active">
                                        Experience
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/projects" activeClassName="active">
                                        Projects
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/cv" activeClassName="active">
                                        CV
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink to="/contact" activeClassName="active">
                                        Contact
                                    </NavLink>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-none d-md-inline-block pt-5">
                <div>
                    Get in touch...<br />
                </div>
                <Contact />
            </div>
        </>
    )
}

export const HeaderWithRouter = withRouter(VerticalNavbar);

// export default VerticalNavbar;