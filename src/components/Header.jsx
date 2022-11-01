import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/header.css"

function Header(props) {

    return (
        <nav className="navbar">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/search"><i className="fa fa-fw fa-search"></i> Search</NavLink>
            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>
            <NavLink to="/login"><i className="fa fa-fw fa-user"></i> Login</NavLink>
        </nav>
    );
}

export default Header;