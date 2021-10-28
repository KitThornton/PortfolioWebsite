import React from "react";
import {Nav} from "react-bootstrap";
import './Navbar.css'

const Navbar = () => {
    return (
        <Nav className="col-12 d-none d-md-block sidebar"
             defaultActiveKey="/home"
             fill
             // variant="tabs"
        >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/experience">Experience</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar