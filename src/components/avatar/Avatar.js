import React from 'react';
import {Image, Container, Row, Col} from "react-bootstrap";
import Me from "../../Thornton_Kit_close.jpg"
import './Avatar.css'

const Avatar = () => {
    return (
        <Container fluid className="py-1">
            <Image src={Me} roundedCircle className="avatar m-2" />
            <Row>
                <Col className="text-center">
                    Hi, I'm Kit Thornton
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    Junior Full Stack Software Engineer
                </Col>
            </Row>
        </Container>
    )
}

export default Avatar;