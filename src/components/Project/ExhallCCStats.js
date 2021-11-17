import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import ExhallCCStatsModal from "../projectModal/ExhallCCStatsModal";
import ExhallCC from "../../ExhallCCStats.png";
import {
    SiGraphql,
    SiApollographql,
    BsBootstrap,
    FaNodeJs,
    GrHeroku,
    IoLogoCss3,
    IoLogoReact,
    SiNetlify,
    SiPostgresql,
    SiRedux
} from 'react-icons/all'
import './Project.css';

class ExhallCCStats extends React.Component {
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
                        <h2>Exhall and Wixford CC Statistics</h2>
                    </span>
                    <Row className="py-1">
                        <Col className="project-caption">
                            OVERVIEW
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-1">
                            This is a 8-page site, currently in its' final stages,  created entirely by myself that
                            displays statistics at player, team and club level since records began in 1956.
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col className="project-caption">
                            DESCRIPTION
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-2">
                            The project architecture was created by myself. This front-end for the website is written in
                            React.js using CSS frameworks and communicates with
                            a PostgreSQL database using Apollo's GraphQL hosted on a Node.js back-end. The
                            data was collated and sanitised using a C# .NET app. Several other tools and packages were used
                            right the way through to web hosting and CI/CD management.
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
                            DevOps: <br/>
                            <GrHeroku/> Heroku
                            <br/>
                            <SiNetlify/> Netlify
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="6" lg="4" className="my-auto mx-auto">
                    <Row className="py-2">
                        <span onClick={this.modalShow}>
                            <img className="project-thumbnail" src={ExhallCC} alt={"Exhall CC Statistics"}/>
                        </span>
                    </Row>
                    {/*<Row className="py-2 d-none d-md-flex">*/}
                    {/*    <span onClick={this.modalShow}>*/}
                    {/*        <img className="project-thumbnail" src={ExhallCC} alt={"Exhall CC Statistics"}/>*/}
                    {/*    </span>*/}
                    {/*</Row>*/}
                </Col>

                <ExhallCCStatsModal
                    onHide={this.modalHide}
                    show={this.state.modalShow}
                />
            </Row>
        )
    }
}

export default ExhallCCStats