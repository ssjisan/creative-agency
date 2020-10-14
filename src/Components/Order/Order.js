import React from 'react';
import './Order.css';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const Order = () => {

    return (
        <main>
            <div className="d-flex justify-content-between">
                <img src={logo} style={{width:"15%"}} alt=""/>
                <h4 style={{marginRight:20}}>Name</h4>
            </div>
            <div className="d-flex">
            <div className="list">
                <ul style={{listStyle:"none"}}>
                    <li> <FontAwesomeIcon icon={faShoppingCart} style={{marginRight:10}} /> Order</li> <br/>
                    <li> <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li> <br/>
                    <li> <FontAwesomeIcon icon={faCommentAlt} style={{marginRight:10}} /> Review</li>
                </ul>
            </div>
            <div className="place-order">
                <h4 style={{textAlign:"left"}}>Order</h4>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" /> <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email" />   <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Project Title" /> <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Message" />   <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Price" /> <br/>
                <button className="btn btn-dark">Submit</button>
            </div>
            <div className="place-order">
                <h4 style={{textAlign:"left"}}>Review</h4>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" /> <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Company Name, Position" />   <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Message" /> <br/>
                <button className="btn btn-dark">Submit</button>
            </div>
            </div>
        </main>
    );
};

export default Order;