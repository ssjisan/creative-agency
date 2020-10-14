import React from 'react';
import Slack from '../../../images/logos/slack.png'
import Google from '../../../images/logos/google.png'
import Uber from '../../../images/logos/uber.png'
import Netflix from '../../../images/logos/netflix.png'
import AirBnb from '../../../images/logos/airbnb.png'
import './HeaderEnd.css'
const HeaderEnd = () => {
    return (
        <div className='d-flex justify-content-around container'>
                <img src={Slack} alt=""/>
                <img src={Google} alt=""/>
                <img src={Uber} alt=""/>
                <img src={Netflix} alt=""/>   
                <img src={AirBnb} alt=""/> 
        </div>
    );
};

export default HeaderEnd;