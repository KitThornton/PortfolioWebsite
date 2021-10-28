import React, {Fragment} from "react";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import './Sidebar.css'
import Avatar from "../avatar/Avatar";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Avatar />
            <Navbar />
            <Contact />
        </div>
    )
};

export default Sidebar;