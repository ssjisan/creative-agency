import React from 'react';
import Group from '../../../images/logos/Frame.png'
import {Link} from "react-router-dom";
const HeaderContent = () => {
    return (
        <main className="row align-items-around" style={{paddingTop:50}}>
            <div className="col-md-6 col-12 offset-md-1">
                <h2>Let's Grow  Your <br/> Brand To  The <br/> Next Level</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!</p>
                <Link to="/signIn"><button className="btn btn-dark">Hire Us</button></Link>
            </div>
            <div className="row col-md-6 col-12" style={{flex:0}}>
                <img src={Group}style={{height:350}} alt=""/>
            </div>
        </main>
    );
};

export default HeaderContent;