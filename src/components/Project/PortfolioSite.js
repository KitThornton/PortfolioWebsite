import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import PortfolioSiteModal from "../projectModal/PortfolioSiteModal";
import {BsBootstrap, IoLogoCss3, IoLogoReact, SiNetlify} from 'react-icons/all'
import PortfolioSitePNG from "../../PortfolioSite2.png";
import './Project.css';

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
                    <span onClick={this.modalShow}>
                        <h2>Portfolio Website</h2>
                    </span>
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
                            I used React, Bootstrap, CSS in order to create this site alongside a host of smaller
                            packages.
                            This site is responsive and is seamlessly viewed on both mobile and laptops
                            (try the other one out)! It has been a fun project and will be regularly updated as I
                            improve my skills and complete new projects.
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
                            <br/>
                            <IoLogoReact/> React
                            <br/>
                            <BsBootstrap/> Bootstrap
                            <br/>
                            <IoLogoCss3/> CSS
                        </Col>
                        <Col>
                            DevOps: <br/>
                            <SiNetlify/> Netlify
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="6" lg="4" className="my-auto mx-auto">
                    <span onClick={this.modalShow}>
                        <img className="project-thumbnail" src={PortfolioSitePNG} alt={"Convert That Climb"}/>
                    </span>
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