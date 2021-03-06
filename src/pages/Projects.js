import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ConvertThatClimb from "../components/Project/ConvertThatClimb";
import PortfolioSite from "../components/Project/PortfolioSite";
import ExhallCCStats from "../components/Project/ExhallCCStats";
import './Projects.css'

export const Projects = () => {
    return (
        <Container>
            <h1 className="pt-3">Projects</h1>
            <Row>
                {/*<Col xs={1}>*/}
                {/*    <div className="timeline">*/}
                {/*    </div>*/}
                {/*</Col>*/}
                <Col>
                    <Row className="py-3">
                        <Col>
                            <ExhallCCStats />
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="project">
                            <ConvertThatClimb/>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <PortfolioSite/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}