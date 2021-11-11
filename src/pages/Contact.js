import {Container, Row, Col} from "react-bootstrap";
import './Contact.css';
import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, BsFacebook, ImWhatsapp } from "react-icons/all";

export const Contact = () => {
    return (
        <Container>
            <h1 className="py-3">Contact</h1>
            <Row className="contact-text py-1 px-3">
                    I am currently open to talking about full-time opportunities.
                    <br /> <br />
                    If you are looking for a talented, self-motivated full-stack Engineer who enjoys working
                    collaboratively then I'd be more than happy to talk!
                    <br /> <br />
                    I can be contacted on the following links. I'm looking forward to hearing from you!
            </Row>
            <br/>
            <Row className="contact-links pt-3 my-auto">
                <Col xs={4} md={2}>
                    Email:
                </Col>
                <Col xs={8} md={10} >
                    <a className="" target="blank" href="mailto:kit.thornton@bath.edu"><
                        AiOutlineMail /> kit.thornton@bath.edu
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={2}>
                    WhatsApp:
                </Col>
                <Col xs={8} md={10}>
                    <a className="" target="blank" href="https://api.whatsapp.com/send?phone=420739052812"><
                        ImWhatsapp /> +420739052812
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={2}>
                    LinkedIn:
                </Col>
                <Col xs={8} md={10}>
                    <a target="blank" href="https://www.linkedin.com/in/kit-thornton/">
                        <AiOutlineLinkedin /> KitThornton
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1 my-auto">
                <Col xs={4} md={2}>
                    GitHub:
                </Col>
                <Col xs={8} md={10}>
                    <a target="blank" href="https://github.com/KitThornton">
                        <AiFillGithub /> KitThornton
                    </a>
                </Col>
            </Row>
            <Row className="contact-links pt-1">
                <Col xs={4} md={2}>
                    Facebook:
                </Col>
                <Col xs={8} md={10}>
                    <a target="blank" href="https://www.facebook.com/kit.thornton.7/">
                        <BsFacebook /> Kit.Thornton7
                    </a>
                </Col>
            </Row>
        </Container>
    )
}