import ReactStars from "react-rating-stars-component";
import {Col, Container, Row} from "react-bootstrap";
import './Skills.css';
import React from "react";

export const Skills = () => {
    return (
        <Container>
            <h1 className="pt-3">Skills</h1>
            <Row>
                <Col className="skills-text">
                    Here's a breakdown of my professional skills acquired through both commercial and personal use.

                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Front-End
                    </div>
                    <StarRatingWithDescription rating={4} description="React" tooltip="react lol"/>
                    <StarRatingWithDescription rating={4} description="Bootstrap"/>
                    <StarRatingWithDescription rating={2} description="Redux"/>
                    <StarRatingWithDescription rating={3} description="Javascript"/>
                    <StarRatingWithDescription rating={3} description="CSS"/>
                    <StarRatingWithDescription rating={3} description="HTML"/>
                    <StarRatingWithDescription rating={1} description="Angular"/>
                </Col>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Back-End
                    </div>
                    <StarRatingWithDescription rating={4} description="C#"/>
                    <StarRatingWithDescription rating={4} description="Node.js"/>
                    <StarRatingWithDescription rating={3} description=".NET Core"/>
                    <StarRatingWithDescription rating={2} description=".NET MVC"/>
                    <StarRatingWithDescription rating={2} description="VB.NET"/>
                    <StarRatingWithDescription rating={1} description="Python"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Database
                    </div>
                    <StarRatingWithDescription rating={4} description="MS SQL Server"/>
                    <StarRatingWithDescription rating={3} description="PostgreSQL"/>
                    <StarRatingWithDescription rating={2} description="Azure Data Studio"/>
                </Col>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        DevOps
                    </div>
                    <StarRatingWithDescription rating={3} description="Heroku"/>
                    <StarRatingWithDescription rating={3} description="Netlify"/>
                    <StarRatingWithDescription rating={2} description="AWS"/>
                    <StarRatingWithDescription rating={3} description="Team City"/>
                    <StarRatingWithDescription rating={2} description="Team Foundation Server"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Project Management
                    </div>
                    <StarRatingWithDescription rating={3} description="GitHub"/>
                    <StarRatingWithDescription rating={3} description="Agile"/>
                    <StarRatingWithDescription rating={2} description="Scrum"/>
                    <StarRatingWithDescription rating={2} description="Jira"/>
                </Col>
                <Col>
                    <div className="skills-header">
                        Testing
                    </div>
                    <StarRatingWithDescription rating={3} description="NUnit"/>
                    <StarRatingWithDescription rating={1} description="xUnit.NET"/>
                    {/*<OverlayTrigger*/}
                    {/*    placement="right"*/}
                    {/*    delay={{show: 100, hide: 400}}*/}
                    {/*    overlay={renderTooltip}*/}
                    {/*>*/}
                    <StarRatingWithDescription rating={2} description="Jest"/>
                    {/*</OverlayTrigger>*/}
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Tools
                    </div>
                    <StarRatingWithDescription rating={4} description="Visual Studio"/>
                    <StarRatingWithDescription rating={4} description="JetBrains products"/>
                    <StarRatingWithDescription rating={4} description="Resharper"/>
                </Col>
                <Col>
                    <div className="skills-header">
                        Testing
                    </div>
                    <StarRatingWithDescription rating={3} description="NUnit"/>
                </Col>
            </Row>
        </Container>
    )
}

const StarRatingWithDescription = (props) => {
    return (
        <Row className="skills-description-row rounded-1">
            <Col className="skills-description my-auto">
                {props.description}
            </Col>
            <Col className="star-rating my-auto">
                <StarRating5Max rating={props.rating}/>
            </Col>
        </Row>
    )
}

const StarRating5Max = (props) => {
    return (
        <ReactStars
            classNames="star"
            count={5}
            size={20}
            value={props.rating}
            activeColor="#ffd700"
            edit={false}
        />
    )
}