import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import ProjectModal from "../projectModal/ProjectModal";
import CTC from "../../CTC.png";
import './Project.css';
import {IoLogoReact, SiRedux, BsBootstrap,
    FaNodeJs, SiPostgresql, IoLogoCss3, SiGraphql, GrHeroku, SiNetlify} from 'react-icons/all'

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
        this.modalShow = this.modalShow.bind();
        this.modalHide = this.modalHide.bind();
    }

    modalShow = () => {
        this.setState({
            modalShow: true,
        })
    }

    modalHide = () => {
        this.setState({
            modalShow: false,
        });
    }

    render() {
        return (
            <Row>
                <Col xs="12" md="4" className="my-auto">
                    <img className="project-thumbnail" src={CTC} alt={"Convert That Climb"} />
                </Col>
                <Col xs="12" md="8">
                    <h2>Convert That Climb</h2>
                    <Row className="py-1">
                        <Col className="project-caption">
                            OVERVIEW
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-1">
                                This website enables the user to convert equivalent climbing grades between different
                                systems
                                for both route climbing and bouldering.
                                {/*Further information on the history and meaning behind*/}
                                {/*the different grading systems can be seen alongside expertise levels of the grades.*/}
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col className="project-caption">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-2">
                            A lightweight RESTful API utilising key features from Netlify and Heroku to allow clear
                            communication between a PostgreSQL database and React/Redux front-end app.
                        </Col>
                    </Row>
                    <Row className="py-2 text-start">
                        <Col>
                            <Button
                                variant="info"
                                onClick={this.modalShow}
                            >
                                More details
                            </Button>
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col className="project-caption">
                            TECH STACK
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
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
                </Col>

                <ProjectModal
                    onHide={this.modalHide}
                    show={this.state.modalShow}
                />
            </Row>
        )
    }
}

export default Project