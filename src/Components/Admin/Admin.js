import React from 'react';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCheck } from '@fortawesome/free-solid-svg-icons'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    return (
        <div>
            <main>
            <div className="d-flex justify-content-between">
                <img src={logo} style={{width:"15%"}} alt=""/>
                <h4 style={{marginRight:20}}>Name</h4>
            </div>
            <div className="d-flex">
            <div className="list">
                <ul style={{listStyle:"none"}}>
                    <li> <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li> <br/>
                    <li> <FontAwesomeIcon icon={faPlus} style={{marginRight:10}} /> Add Service</li> <br/>
                    <li> <FontAwesomeIcon icon={faUserCheck} style={{marginRight:10}} />Make Admin</li>
                </ul>
            </div>
            <div className="place-order">
                <h4 style={{textAlign:"left"}}>Add Service</h4>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Service Title" /> <br/>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Description" />   <br/>
                <button className="btn btn-success" style={{marginBottom:20}}><FontAwesomeIcon icon={faCloudUploadAlt} style={{marginRight:10}} />Upload Image</button>  <br/> 
                <button className="btn btn-dark">Submit</button>
            </div>
            </div>
        </main>
        </div>
    );
};

export default Admin;