import React from "react";
import {Nav} from "react-bootstrap";
// import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <Nav className="d-sm-block"
             // activeKey="/home"
             fill
             // variant="tabs"
        >
            {/*<Nav.Item>*/}
            {/*    <Nav.Link eventKey="/home" href="/home">Home</Nav.Link>*/}
            {/*</Nav.Item>*/}
            <Nav.Item>
                <Nav.Link eventKey="skills" href="/skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/experience">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>*/}
            {/*    <Nav.Link disabled/>*/}
            {/*</Nav.Item>*/}
            <Nav.Item>
                <Nav.Link href="/cv">CV</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar