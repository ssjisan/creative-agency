import React from 'react';
import Logo from '../../../images/logos/logo.png'
const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-around">
        <img src={Logo} style={{width:200}} alt="" className="offset-md-1" />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#"> Home </a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                    <button class="btn btn-dark" type="submit">Login</button>
            </div>
        </nav>
    );
};

export default NavBar;