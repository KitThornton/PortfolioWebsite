import {Container, Row, Col} from "react-bootstrap";
import './Contact.css';
import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, BsFacebook, ImWhatsapp } from "react-icons/all";

export const Contact = () => {
    return (
        <Container className="contact-content-body">
            <h1 className="py-3">Contact</h1>
            <Row className="contact-text py-1">
                <Col className="col-left">
                    I am currently open to talking about full-time opportunities.
                    <br /> <br />
                    If you are looking for a talented, self-motivated full-stack Engineer who enjoys working
                    collaboratively then I'd be more than happy to talk!
                    <br /> <br />
                    I can be contacted on the following links. I'm looking forward to hearing from you!
                </Col>
            </Row>
            <br/>
            <Row className="contact-links pt-3">
                <Col xs={4} md={4} className="col-left">
                    Email:
                </Col>
                <Col xs={8} md={8} className="col-left">
                    <a className="" target="blank" href="mailto:kit.thornton@bath.edu"><
                        AiOutlineMail /> kit.thornton@bath.edu
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={4} className="col-left">
                    WhatsApp:
                </Col>
                <Col xs={8} md={8} className="col-left">
                    <a className="" target="blank" href="https://api.whatsapp.com/send?phone=420739052812"><
                        ImWhatsapp /> +420739052812
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={4} className="col-left">
                    LinkedIn:
                </Col>
                <Col xs={8} md={8} className="col-left">
                    <a target="blank" href="https://www.linkedin.com/in/kit-thornton/">
                        <AiOutlineLinkedin /> kit-thornton
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={4} className="col-left">
                    GitHub:
                </Col>
                <Col xs={8} md={8} className="col-left">
                    <a target="blank" href="https://github.com/KitThornton">
                        <AiFillGithub /> KitThornton
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1">
                <Col xs={4} md={4} className="col-left">
                    Facebook:
                </Col>
                <Col xs={8} md={8} className="col-left">
                    <a target="blank" href="https://www.facebook.com/kit.thornton.7/">
                        <BsFacebook /> Kit.Thornton.7
                    </a>
                </Col>
            </Row>
        </Container>
    )
}