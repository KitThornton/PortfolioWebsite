import React from 'react';
import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, BsFacebook } from "react-icons/all";
import {Container, Row, Col} from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    return (
        <Container className="pt-5">
            <Row>
                <Col  className="text-center py-2">
                    Get in touch
                </Col>
            </Row>
            <Row>
                <Col>
                    <a target="blank" href="https://www.linkedin.com/in/kit-thornton/"><AiOutlineLinkedin /></a>
                </Col>
                {/*<Col>*/}
                {/*    <a target="blank" href="https://www.kitthornton.dev/"><AiOutlineHome /></a>*/}
                {/*</Col>*/}
                <Col>
                    <a target="blank" href="https://github.com/KitThornton"><AiFillGithub /></a>
                </Col>
                <Col>
                    <a target="blank" href="mailto:kit.thornton@bath.edu"><AiOutlineMail /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://www.facebook.com/kit.thornton.7/"><BsFacebook /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;