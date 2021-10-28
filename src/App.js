import './App.css';
import {Container, Row, Col} from "react-bootstrap";
// import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <Router>
            <Container className="py-5">
                <Row>
                    <Col xs={3} className="sidebar">
                        <Sidebar />
                    </Col>
                    <Col xs={9} className="content">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/skills' component={Skills} />
                            <Route exact path='/projects' component={Projects} />
                            <Route exact path='/experience' component={Experience} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

const Home = () => <h1>HOME</h1>;
const Contact = () => <h1>Contact</h1>;
const Experience = () => <h1>Experience</h1>;
const Skills = () => <h1>Skills</h1>;
const Projects = () => <h1>Projects</h1>;

export default App;