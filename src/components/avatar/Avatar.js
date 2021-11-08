import React from 'react';
import {Image, Container, Row, Col} from "react-bootstrap";
import Me from "../../Thornton_Kit_close.jpg"
import './Avatar.css'
import {NavLink} from "react-router-dom";

const Avatar = () => {
    return (
        <a href='/'>
            <Container fluid className="py-2 my-0">
                <Image src={Me} roundedCircle className="avatar m-2" />
                <Row>
                    <Col className="text-center name">
                        Kit Thornton
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center caption">
                        Full Stack Software Engineer
                        {/*FULL STACK SOFTWARE ENGINEER*/}
                    </Col>
                </Row>
            </Container>
        </a>
    )
}

export default Avatar;