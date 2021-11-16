import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import Me from "../../Thornton_Kit_close.jpg"
import './Avatar.css'
import {NavLink} from "react-router-dom";

const Avatar = () => {
    return (
        <NavLink activeClassName="dummyClass" to='/'>
            <Container fluid className="py-2 my-0">
                <Image src={Me} roundedCircle className="avatar m-2"/>
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
        </NavLink>
    )
}

export default Avatar;