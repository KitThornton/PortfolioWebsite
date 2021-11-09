import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './SectionButtonGroup.css'

export const SectionButtonGroup = () => {
    return (
        <div className="pt-5 text-center">
            {/*<ButtonGroup className="btn-secondary">*/}
                <Button variant="outline-secondary" className="rounded-pill">
                    <NavLink to="/skills">
                        Skills
                    </NavLink>
                </Button>
                <Button variant="outline-secondary" className="rounded-pill">
                    <NavLink to="/experience">
                        Experience
                    </NavLink>
                </Button>
                <Button variant="outline-secondary" className="rounded-pill">
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </Button>
                <Button variant="outline-secondary" className="rounded-pill">
                    <NavLink to="/CV">
                        CV
                    </NavLink>
                </Button>
                <Button variant="outline-secondary" className="rounded-pill">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </Button>
            {/*</ButtonGroup>*/}
        </div>
    )
}