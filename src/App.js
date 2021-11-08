import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import image from "./Tatra_mountains.jpg";

function App() {
    return (
        <Router>
            {/*backgroundColor: "#dfdfdf",*/}
            <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <Container fluid className="">
                    <Row>
                        <Col xs={12} sm={3} className="sidebar mx-0 px-0">
                            <Sidebar />
                        </Col>
                        <Col xs={12} sm={9} className="content">
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/home' component={Home} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/skills' component={Skills} />
                                <Route exact path='/projects' component={Projects} />
                                <Route exact path='/experience' component={Experience} />
                                <Route exact path='/cv' component={CV} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

const Home = () => <h1>HOME</h1>;
const Contact = () => <h1>Contact</h1>;
const Experience = () => <h1>Experience</h1>;
const Skills = () => <h1>Skills</h1>;
const Projects = () => <h1>Projects</h1>;
const CV = () => <h1>CV</h1>;

export default App;