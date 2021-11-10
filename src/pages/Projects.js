import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Project from "../components/Project/Project";
import './Projects.css'

export const Projects = () => {
    return (
        <Container>
            <h1 className="pt-3">Projects</h1>
            <Row className="py-3">
                <Col className="project">
                    <Project />
                </Col>
            </Row>
        </Container>
    )
}