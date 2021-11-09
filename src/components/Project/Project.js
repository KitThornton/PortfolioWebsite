import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import ProjectModal from "../projectModal/ProjectModal";
import CTC from "../../CTC.png";
import './Project.css';

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
                <Col xs="12" md="4">
                    <img className="project-thumbnail" src={CTC} alt={"Convert That Climb"} />
                </Col>
                <Col xs="12" md="8">
                    <h2>Convert That Climb</h2>
                    <Row className="py-1">
                        <Col className="project-caption">
                            LINKS
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <Button
                                variant="outline-secondary"
                                onClick={this.modalShow}
                            >
                                More details
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="outline-secondary"
                            >
                                View the site
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="outline-secondary"
                            >
                                View the code
                            </Button>
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col className="project-caption">
                            OVERVIEW
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text">
                                This website enables the user to convert equivalent climbing grades between different
                                systems
                                for both route climbing and bouldering.
                                {/*Further information on the history and meaning behind*/}
                                {/*the different grading systems can be seen alongside expertise levels of the grades.*/}
                            </div>
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col className="project-caption">
                            TECH STACK
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text">
                            React
                            Redux
                            React-Bootstrap
                            CSS
                            Node.js
                            PostgreSQL
                            Heroku
                            Netlify
                            Jest
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