import React from "react";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";
import Contact from "../contact/Contact";
import './Sidebar.css'
import Avatar from "../avatar/Avatar";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/*<Avatar />*/}
            <Navbar2 />
            {/*<Contact />*/}
        </div>
    )
};

export default Sidebar;