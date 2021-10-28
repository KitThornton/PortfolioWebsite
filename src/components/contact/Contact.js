import React from 'react';
import {AiOutlineLinkedin, AiOutlineHome, AiFillGithub, AiOutlineMail } from "react-icons/all";
import {Container, Row, Col} from "react-bootstrap";

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
                <Col>
                    <a target="blank" href="https://www.kitthornton.dev/"><AiOutlineHome /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://github.com/KitThornton"><AiFillGithub /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://github.com/KitThornton"><AiOutlineMail /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;