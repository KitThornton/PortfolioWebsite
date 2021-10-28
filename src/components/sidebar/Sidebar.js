import React, {Fragment} from "react";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";

const Sidebar = () => {
    return (
        <Fragment>
            <Navbar />
            <Contact />
        </Fragment>
    )
};

export default Sidebar;