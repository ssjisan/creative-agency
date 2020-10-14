import React from 'react';
import Group from '../../../images/logos/Frame.png'
const HeaderContent = () => {
    return (
        <main className="d-flex align-items-around" style={{paddingTop:50}}>
            <div className="col-md-6 offset-md-1">
                <h2>Let's Grow  Your <br/> Brand To  The <br/> Next Level</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem deserunt molestias facere praesentium voluptate!</p>
                <button className="btn btn-dark">Hire Us</button>
            </div>
            <div className="col-md-6" style={{flex:0}}>
                <img src={Group}style={{height:350}} alt=""/>
            </div>
        </main>
    );
};

export default HeaderContent;