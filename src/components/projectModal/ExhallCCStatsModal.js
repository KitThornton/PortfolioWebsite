import React from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import {
    BsBootstrap,
    BsGithub,
    FaNodeJs,
    GrHeroku,
    IoLogoCss3,
    IoLogoReact, SiApollographql, SiGraphql,
    SiNetlify, SiPostgresql,
    SiRedux
} from 'react-icons/all';
import './ProjectModal.css';

export default function ExhallCCStatsModal(props) {

    return (

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            {...props}
            dialogClassName="project-modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row className="mx-0">
                        <Col className="my-auto">
                            <a href="https://www.kitthornton.dev/" target="_blank" rel="noreferrer">
                                <h1>Exhall and Wixford CC Statistics</h1>
                            </a>
                        </Col>
                        {/*<Col xs={12} lg={4} className="my-auto">*/}
                        {/*    <h6>*/}
                        {/*        <a target="_blank" rel="noreferrer" href="https://www.kitthornton.dev/">*/}
                        {/*            www.kitthornton.dev*/}
                        {/*        </a>*/}
                        {/*    </h6>*/}
                        {/*</Col>*/}
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
                            This is a full-stack project where I've written everything from the C# .NET app to transfer
                            statistics from an excel file into executable SQL Insert statements through to the GraphQL back-end,
                            React.js front-end and web hosting.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            Firstly, I created the DB architecture in PostgreSQL which included using Boyce-Codd normal form
                            to minimise data redundancies. I have written functions and stored procedures to create a Data
                            Access Layer (DAL) whereby I can obtain data by team, season, player and other parameters.
                            Then, I used NodeJS with Express.js and node-postgres to query the DB and contain logic.
                            I then integrated a ReactJS front-end to allow communication between the DB and UI using Redux
                            as a state management tool to ensure the app is scalable and easily maintained.
                            When styling the front-end CSS frameworks such as React-Bootstrap and Recharts were useful in
                            creating a UI whereby key statistics could be viewed and the site navigated seamlessly.
                        </Col>
                    </Row>
                    <Row>
                        <Col className="section-title">
                            TECH STACK
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            I used C# and Javascript for this project and the full tech stack can be seen below.
                            The GitHub repositories can be seen below:
                        </Col>
                    </Row>
                    <Row className="text-center py-2">
                        <Col>
                            <a href="https://github.com/KitThornton/ExhallCCWebsite" target="_blank" rel="noreferrer">
                                Front-end app: < BsGithub/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/KitThornton/ExhallCCWebsiteAPI" target="_blank"
                               rel="noreferrer">
                                Back-end app: < BsGithub/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/KitThornton/ExhallCCStatisticsCreator" target="_blank"
                               rel="noreferrer">
                                SQL Script Creator: < BsGithub/>
                            </a>
                        </Col>
                    </Row>
                    <Row className="text-center py-2">
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Front-End:
                            <br/>
                            <IoLogoReact/> React
                            <br/>
                            <SiRedux/> Redux
                            <br/>
                            <BsBootstrap/> Bootstrap
                            <br/>
                            <IoLogoCss3/> CSS
                        </Col>
                        <Col>
                            Back-End:<br/>
                            <FaNodeJs/> Node.js
                            <br/>
                            <SiGraphql/> Graph QL
                            <br />
                            <SiApollographql /> Apollo
                        </Col>
                        <Col>
                            Database:<br/>
                            <SiPostgresql/> PostgreSQL
                        </Col>
                        <Col>
                            Hosting: <br/>
                            <GrHeroku/> Heroku
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
                                    Choosing the correct tech to use at the start is important. Refactoring code later
                                    throughout the project slows development speed and it is worth spending additional
                                    time at the project inception to research which tech and tools wioll be most useful
                                    for the individual project at hand.
                                </li>
                                <li>
                                    Similarly to previous projects, Bootstrap and other CSS frameworks are very useful and
                                    speed up development speed. However there are limits and it should always be expected
                                    that writing pure CSS will be needed to ensure a good, responsive application.
                                </li>
                                <li>
                                    Having a good, solid design ideas for different project pages is important. The designs
                                    are not going to be final, but will help in framing the page and placing components.
                                    Furthermore, these designs/sketches reduce development time as the code can be written to
                                    fit the screen mock up and then minor adjustments can be made.
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