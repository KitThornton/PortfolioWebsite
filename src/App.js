import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import image from "./Tatra_mountains.jpg";
import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {Skills} from "./pages/Skills";
import {Experience} from "./pages/Experience";
import CV from "./pages/CV"
import './App.css';

function App() {
    return (
        <Router>
            <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={3} className="sidebar mx-0 px-0">
                            <Sidebar />
                        </Col>
                        <Col xs={12} sm={9} className="content">
                            <div className="content-box">
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path='/home' component={Home} />
                                    <Route exact path='/contact' component={Contact} />
                                    <Route exact path='/skills' component={Skills} />
                                    <Route exact path='/projects' component={Projects} />
                                    <Route exact path='/experience' component={Experience} />
                                    <Route exact path='/cv' component={CV} />
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

export default App;