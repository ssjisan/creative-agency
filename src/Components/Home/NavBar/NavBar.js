import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../../images/logos/logo.png'
const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-around">
        <img src={Logo} style={{width:200}} alt="" className="offset-md-1" />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5"> Home </li>
                    <li class="nav-item mr-5">Our Portfolio </li>
                    <li class="nav-item mr-5">Our Team </li>
                    <li class="nav-item mr-5">Contact Us </li>
                </ul>
                    <Link to="/signIn"><button class="btn btn-dark" type="submit">Login</button></Link>
            </div>
        </nav>
    );
};

export default NavBar;