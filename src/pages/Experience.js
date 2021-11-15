import {Container, Row, Col} from "react-bootstrap";
import "./Experience.css";

export const Experience = () => {
    return (
        <Container>
            <h1 className="pt-3">Experience</h1>
            <Education />
            <div className="divider-wrapper">
                <div className="divider" />
            </div>
            <Employment />
        </Container>
    )
}


export const Education = () => {
    return (
        <div>
            <h2 className="pt-1 text-start">Education</h2>
            <University />
            <ALevels />
            <GCSEs />
        </div>
    )
}

const Employment = () => {
    return (
        <div>
            <h2 className="pt-1 text-start">Employment</h2>
            <ExhallAndWixford />
            <Digiworkz />
            <FNZ />
        </div>
    )
}

const University = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>University of Bath</h3>
                <h6>Sep 2014 - Jun 2019</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>Aerospace Engineering, MEng (Hons)</h4>
                <h6>First Class Honours</h6>
                <div className="d-none d-md-block">
                    <h6>Thesis: Mathematical modelling of complex aerodynamic behaviour, First Class</h6>
                    <h6>
                        The course was a combination of fluid dynamics, computational modelling and engineering processes.
                        In my masters year I was able to focus on computational modules allowing me to explore areas
                        such as Computational Fluid Dynamics (CFD), Particle-Image Velocimetry (PIV) and large-scale
                        vector mechanics. I used primarily Python and Matlab for these studies.
                    </h6>
                </div>
            </Col>
        </Row>
    )
}

const ALevels = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>Bromsgrove School</h3>
                <h6>Sep 2012 - Jun 2014</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>A Levels</h4>
                <h6>
                    Maths: A*
                    Further Maths: A*
                    Physics: A
                    Chemistry: A
                </h6>
                <div className="d-none d-md-block">
                    <h6>
                        I first started programming in school where I would use Python to create small apps and interfaces
                        for school projects. I enjoyed Maths and Physics and decided to study the more technical Engineering
                        discipline of Aerospace.
                    </h6>
                </div>
            </Col>
        </Row>
    )
}

const GCSEs = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>Bromsgrove School</h3>
                <h6>Sep 2010 - Jun 2012</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>GCSEs</h4>
                <h6>
                    10 A*s, 1 A
                </h6>
            </Col>
        </Row>
    )
}

const Digiworkz = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>Digiworkz</h3>
                <h6>Jul 2021 - Sep 2021</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>Freelance Web Developer</h4>
                <div className="d-none d-md-block">
                    <h6>
                        As part of Digiworkz’ campaign to increase the user engagement of their online platforms I
                        created and hosted a 10-page site using HTML, CSS, JS which can be accessed
                        <a rel="noreferrer" target="_blank" href="http://www.insights.digiworkz.com/home"> here.</a> Managing client expectations and other projects was a
                        challenge that I relished in this role. I learned a great deal about front-end development and web hosting.
                    </h6>
                </div>
            </Col>
        </Row>
    )
}

const ExhallAndWixford = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>Exhall and Wixford CC</h3>
                <h6>Sep 2021 - current</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>Freelance Web Developer</h4>
                <div className="d-none d-md-block">
                    <h6>
                        I am undertaking a project to create a statistics website for Exhall and Wixford CC.
                        This has included creating the entire project architecture using GIT for version control.
                        Having started with only
                        an extensive Excel document, I have extracted the statistics from the excel page using C#,
                        created the DB architecture, created the REST API back-end and written and designed an entire
                        front-end. <br />
                        The initial deployment will take place in December 2021.
                    </h6>
                </div>
            </Col>
        </Row>
    )
}

const FNZ = () => {
    return (
        <Row className="py-2 text-start education-single">
            <Col xs={12} md={4}>
                <h3>FNZ</h3>
                <h6>Sep 2019 - May 2021</h6>
            </Col>
            <Col xs={12} md={8}>
                <h4>Graduate Software Developer</h4>
                <div className="d-none d-md-block">
                    <h6>
                        Overview into what I was doing here
                    </h6>
                </div>
            </Col>
        </Row>
    )
}

