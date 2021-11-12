import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import PortfolioSiteModal from "../projectModal/PortfolioSiteModal";
import CTC from "../../CTC.png";
import './Project.css';
import {IoLogoReact, BsBootstrap, IoLogoCss3, SiNetlify} from 'react-icons/all'

class PortfolioSite extends React.Component {
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
                    <h2>Portfolio Website</h2>
                    <Row className="py-1">
                        <Col className="project-caption">
                            OVERVIEW
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-1">
                            I created this very website here in order to develop my front-end skills and display
                            my abilities as a freelance professional.
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col className="project-caption">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-2">
                            I used React, Bootstrap, CSS in order to create this site alongside a host of smaller packages.
                            This site is responsive and is easily viewed on both mobile and laptops
                            (try the other medium out)!  It has been a fun project and will be regularly updated as I
                            imropve my skills and complete new projects.
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
                            <BsBootstrap /> Bootstrap
                            <br/>
                            <IoLogoCss3 /> CSS
                        </Col>
                        <Col>
                            Hosting: <br/>
                            <SiNetlify/> Netlify
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="6" lg="4" className="my-auto mx-auto">
                    <img className="project-thumbnail" src={CTC} alt={"Convert That Climb"} />
                </Col>

                <PortfolioSiteModal
                    onHide={this.modalHide}
                    show={this.state.modalShow}
                />
            </Row>
        )
    }
}

export default PortfolioSite