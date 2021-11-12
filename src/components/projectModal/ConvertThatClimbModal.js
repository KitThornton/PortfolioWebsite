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
// import {IconContext} from "react-icons";

export default function ConvertThatClimbModal(props) {

    return(

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            {...props}
            dialogClassName="project-modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row className="mx-0">
                        <Col xs={12} lg={7} className="my-auto">
                            <a href="https://www.convertthatclimb.co.uk/" target="_blank" rel="noreferrer">
                                <h1>Convert That Climb</h1>
                            </a>
                        </Col>
                        {/*<Col xs={12} lg={5} className="d-flex align-items-end" >*/}
                        <Col xs={12} lg={5} className="my-auto" >
                            <h6>
                                <a target="_blank" rel="noreferrer" href="https://www.convertthatclimb.co.uk">
                                    www.convertthatclimb.co.uk
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
                            This site allows the user to convert between multiple different rock climbing grades with ease.
                            Equivalent grades can be compared for both route climbing and bouldering alongside useful
                            information about the history of each grading system.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            Simply put, the front-end app, written in React with Bootstrap and CSS styling, communicates with a
                            RESTful API, hosted on Heroku, and retrieves data from the PostgreSQl database. The front-end app
                            utilises Redux for state management in order to centralise the state and ensure that the app is
                            well-written, easily maintainable and scalable. The back-end is written in Javascript using Node.js and
                            is a lightweight API able to consume errors and handle multiple asynchronous requests from the app.
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
                            The GitHub repositories for the front-end app and API can be seen here:
                        </Col>
                    </Row>
                    <Row className="text-center py-2">
                        <Col>
                            <a href="https://github.com/KitThornton/convertthatclimb" target="_blank" rel="noreferrer">
                                Front-end app: < BsGithub/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/KitThornton/ConvertThatClimbAPI" target="_blank" rel="noreferrer">
                                Node.js API: < BsGithub/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Front-End:
                            <br />
                            <IoLogoReact /> React
                            <br/>
                            <SiRedux /> Redux
                            <br/>
                            <BsBootstrap /> Bootstrap
                            <br/>
                            <IoLogoCss3 /> CSS
                        </Col>
                        <Col>
                            Back-End:<br />
                            <FaNodeJs /> Node.js
                            <br/>
                            <SiGraphql /> GraphQL
                        </Col>
                        <Col>
                            Database:<br />
                            <SiPostgresql /> PostgreSQL
                        </Col>
                        <Col>
                            Hosting: <br/>
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