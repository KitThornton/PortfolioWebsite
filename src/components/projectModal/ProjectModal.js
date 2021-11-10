import React from 'react';
import { Modal,  Button, Row, Col } from 'react-bootstrap';
// import {BsGithub} from 'react-icons/all';
import './ProjectModal.css';

export default function ProjectModal(props) {

    return(

        <Modal
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            // centered
            {...props}
            dialogClassName="project-modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Row>
                        <Col xs={12} md={8} className="my-auto">
                            <h1>Convert That Climb
                            </h1>
                        </Col>
                        <Col xs={12} md={4} className="my-auto">
                            <a target="_blank" rel="noreferrer" href="https://www.convertthatclimb.co.uk">
                                www.convertthatclimb.co.uk
                            </a>
                        </Col>
                        {/*<Col xs={1} md={1} className="my-auto">*/}
                        {/*    <BsGithub />*/}
                        {/*</Col>*/}
                    </Row>

                    {/*<a target="_blank" rel="noreferrer" href="https://github.com/KitThornton/convertthatclimb">*/}
                    {/*    <BsGithub />*/}
                    {/*</a>*/}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    THE BRIEF
                </p>
                <p>
                    This site allows the user to convert between multiple different rock climbing grades with ease.
                    Equivalent grades can be compared for both route climbing and bouldering alongside useful
                    information about the history of each grading system.
                </p>
                <p>
                    DESCRIPTION
                </p>
                <p>
                    Simply put, the front-end app, written in React with Bootstrap and CSS styling, communicates with a
                    RESTful API, hosted on Heroku, and retrieves data from the PostgreSQl database. The front-end app
                    utilises Redux for state management in order to centralise the state and ensure that the app is
                    well-written, easily maintainable and scalable. The back-end is written in Javascript using Node.js and
                    is a lightweight API able to consume errors and handle multiple asynchronous requests from the app.
                </p>
                <p>
                    TECH STACK
                </p>
                <p>
                    LEARNING OUTCOMES
                </p>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}