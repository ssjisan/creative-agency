import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import HeaderEnd from '../HeaderEnd/HeaderEnd';
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <NavBar></NavBar>
            <HeaderContent></HeaderContent>
            <HeaderEnd></HeaderEnd>
        </div>
    );
};

export default Header;