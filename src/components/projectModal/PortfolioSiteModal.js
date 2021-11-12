import React from 'react';
import { Modal,  Button, Row, Col, Container } from 'react-bootstrap';
import {BsGithub} from 'react-icons/all';
import './ProjectModal.css';
import {
    BsBootstrap,
    FaNodeJs,
    GrHeroku,
    IoLogoCss3,
    IoLogoReact,
    SiGraphql, SiNetlify,
    SiPostgresql,
    SiRedux
} from "react-icons/all";

export default function PortfolioSiteModal(props) {

    return(

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            {...props}
            dialogClassName="project-modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row className="mx-0">
                        <Col xs={12} lg={8} className="my-auto">
                            <a href="https://www.convertthatclimb.co.uk/" target="_blank" rel="noreferrer">
                                <h1>Portfolio Website</h1>
                            </a>
                        </Col>
                        <Col xs={12} lg={4} className="my-auto" >
                            <h6>
                                <a target="_blank" rel="noreferrer" href="https://www.kitthornton.dev/">
                                    www.kitthornton.dev
                                </a>
                            </h6>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className="section-title">
                            THE BRIEF
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            Dummy yetctt ehrere
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            Dummy yetctt ehrere
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            TECH STACK
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            I used a primarily Javascript for this project and the full tech stack can be seen below.
                            The GitHub repository can be seen below:
                        </Col>
                    </Row>
                    <Row className="text-center py-2">
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Project Management:
                            <br />
                            <a href="https://github.com/KitThornton/PortfolioWebsite" target="_blank" rel="noreferrer">
                                <BsGithub /> GitHub
                            </a>
                        </Col>
                        <Col>
                            Front-End:
                            <br />
                            <IoLogoReact /> React
                            <br/>
                            <BsBootstrap /> Bootstrap
                            <br/>
                            <IoLogoCss3 /> CSS
                        </Col>
                        <Col>
                            DevOps: <br/>
                            <GrHeroku /> Heroku
                            <br/>
                            <SiNetlify/> Netlify
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            LEARNING OUTCOMES
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            This single-page application taught me a great deal about web development and I have enjoyed
                            it greatly. I've summarised the key outcomes below:
                            <ul>
                                <li>
                                    Redux is a necessity  when building React applications as it allows the components
                                    to be written more succinctly and requests can be reused easily. Furthermore, centralising the
                                    state will be essential when creating a multi-page application.
                                </li>
                                <li>
                                    Through using two separate GitHub repositories, one for the front-end app and another
                                    for the API allows Netlify and Heroku to be used more easily.
                                </li>
                                <li>
                                    Using a single CSS framework reduces confusion between similar functionalites between
                                    different frameworks. Using solely React-Bootstrap as oppose to part Reactstrap or
                                    MaterialUI is more beneficial. Further styling can be applied simply with CSS.
                                </li>
                                <li>
                                    Prioritise developing a responsive application from the get-go. You should be constantly
                                    thinking about how the app will look on a mobile. Using Chrome/Firefox dev tools helps
                                    us out with this.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}