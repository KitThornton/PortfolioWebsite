import ReactStars from "react-rating-stars-component";
import {Row, Col, Container} from "react-bootstrap";
import './Skills.css';

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
                    <StarRatingWithDescription rating={4} description="React" />
                    <StarRatingWithDescription rating={4} description="Bootstrap" />
                    <StarRatingWithDescription rating={2} description="Redux" />
                    <StarRatingWithDescription rating={4} description="Bootstrap" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Back-End
                    </div>
                    <StarRatingWithDescription rating={4} description="C#" />
                    <StarRatingWithDescription rating={4} description="Node.js" />
                    <StarRatingWithDescription rating={2} description=".NET Core" />
                    <StarRatingWithDescription rating={2} description=".NET MVC" />
                    <StarRatingWithDescription rating={2} description="VB.NET" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Database
                    </div>
                    <StarRatingWithDescription rating={4} description="MS SQL Server" />
                    <StarRatingWithDescription rating={3} description="PostgreSQL" />
                </Col>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        DevOps
                    </div>
                    <StarRatingWithDescription rating={3} description="Heroku" />
                    <StarRatingWithDescription rating={3} description="Netlify" />
                    <StarRatingWithDescription rating={2} description="AWS" />
                    <StarRatingWithDescription rating={3} description="Team City" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="skills-header">
                        Project Management
                    </div>
                    <StarRatingWithDescription rating={3} description="GitHub" />
                    <StarRatingWithDescription rating={3} description="Agile" />
                    <StarRatingWithDescription rating={2} description="Jira" />
                </Col>
                <Col>
                    <div className="skills-header">
                        Testing
                    </div>
                    <StarRatingWithDescription rating={3} description="NUnit" />
                    <StarRatingWithDescription rating={1} description="xUnit.NET" />
                    <StarRatingWithDescription rating={2} description="Jest" />
                </Col>
            </Row>
        </Container>
    )
}

const StarRatingWithDescription = (props) => {
    return (
        <Row className="skills-description-row">
            <Col className="skills-description my-auto">
                {props.description}
            </Col>
            <Col className="my-auto">
                <StarRating5Max rating={props.rating} />
            </Col>
        </Row>
    )
}

const StarRating5Max = (props) => {
    return (
        <ReactStars
            count={5}
            size={24}
            value ={props.rating}
            activeColor="#ffd700"
            edit={false}
        />
    )
}