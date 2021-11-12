import React from 'react';
import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, BsFacebook, ImWhatsapp} from "react-icons/all";
import {Container, Row, Col} from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    return (
        <Container className="">
            <Row>
                <Col >
                    <a target="blank" href="https://www.linkedin.com/in/kit-thornton/"><AiOutlineLinkedin /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://github.com/KitThornton"><AiFillGithub /></a>
                </Col>
                <Col>
                    <a target="blank" href="mailto:kit.thornton@bath.edu"><AiOutlineMail /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://www.facebook.com/kit.thornton.7/"><BsFacebook /></a>
                </Col>
                <Col>
                    <a target="blank" href="https://api.whatsapp.com/send?phone=420739052812"><ImWhatsapp /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;