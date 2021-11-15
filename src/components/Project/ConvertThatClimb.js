import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import ConvertThatClimbModal from "../projectModal/ConvertThatClimbModal";
import CTC from "../../CTC.png";
import './Project.css';
import {IoLogoReact, SiRedux, BsBootstrap,
    FaNodeJs, SiPostgresql, IoLogoCss3, AiOutlineCloud, GrHeroku, SiNetlify} from 'react-icons/all'

class ConvertThatClimb extends React.Component {
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
                <Col xs="12" md="12" lg="8">
                    <h2>Convert That Climb</h2>
                    <Row className="py-1">
                        <Col className="project-caption">
                            OVERVIEW
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-1">
                                This website enables the user to convert equivalent climbing grades between different
                                systems for both route climbing and bouldering.
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
                            <AiOutlineCloud /> REST API
                        </Col>
                        <Col>
                            Database:<br />
                            <SiPostgresql /> PostgreSQL
                        </Col>
                        <Col>
                            DevOps: <br/>
                            <GrHeroku /> Heroku
                            <br/>
                            <SiNetlify/> Netlify
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="6" lg="4" className="my-auto mx-auto">
                    <span onClick={this.modalShow}>
                        <img className="project-thumbnail" src={CTC} alt={"Convert That Climb"} />
                    </span>
                </Col>

                <ConvertThatClimbModal
                    onHide={this.modalHide}
                    show={this.state.modalShow}
                />
            </Row>
        )
    }
}

export default ConvertThatClimb