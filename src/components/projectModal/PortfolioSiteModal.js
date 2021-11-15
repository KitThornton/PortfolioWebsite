import React from 'react';
import { Modal,  Button, Row, Col, Container } from 'react-bootstrap';
import {BsGithub} from 'react-icons/all';
import './ProjectModal.css';
import {
    BsBootstrap,
    GrHeroku,
    IoLogoCss3,
    IoLogoReact,
    SiNetlify,
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
                            <a href="https://www.kitthornton.dev/" target="_blank" rel="noreferrer">
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
                            This site is used as a portfolio for my work undertaken as a full-stack developer. The aims
                            being that it will help showcase my work, increase client interactions and help me develop
                            my front-end skills in the process.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            I used React, Bootstrap, CSS and a host of smaller packages to create this site. This project
                            was particularly interesting as I placed a heavy emphasis on making the site responsive to
                            ensure that the experience will be enjoyable both on mobile and laptop. I created a library
                            of re-usable React components that provided a good foundation to ensure that the code was
                            consistent, easily maintainable and any slight tweaks were easy and fast to deploy. I used
                            GitHub to deploy straight to Netlify whilst using Netlify's built-in CI/CD pipeline. This
                            ensured a very fast development speed and increased the user testing I could perform on the
                            intended domain seen above.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            TECH STACK
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            I used Javascript for this project and the full tech stack can be seen below.
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
                            <a href="https://github.com/KitThornton/PortfolioWebsite" target="_blank" rel="noreferrer"
                            className="github">
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
                                    Prioritise developing a responsive application from the get-go. You should be constantly
                                    thinking about how the app will look on a mobile. Using Chrome/Firefox dev tools helps
                                    us out with this.
                                </li>
                                <li>
                                    Bootstrap and other CSS frameworks are very useful and speed up development speed.
                                    However there are limits and it should always be expected that writing pure CSS
                                    will be needed to ensure a good, responsive application.
                                </li>
                                <li>
                                    UI design is more challenging than often thought! It is best to sketch out a plan
                                    for thw site or individual pages / components before coding them in. This allows
                                    a more creative approach to styling initially and usually reduces development
                                    time as the code can be written to fit the screen mock up and then minor adjustments
                                    can be made.
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