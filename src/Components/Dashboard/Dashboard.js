import React from 'react';
import './Dashboard.css'
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {  faUserCheck } from '@fortawesome/free-solid-svg-icons'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import {  useParams } from 'react-router-dom';
import fakedata from '../fakedata/fakedata'
import { UserContext } from '../../App';
import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useState } from 'react';
const Dashboard = () => {
    const {id} = useParams();
    const order = fakedata.find (order=> order.id == id);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const routes = [
        /*******************************************Route For Order Start************************************************************/   
        {
          path: `/order/${id}`,
          exact: true,
          sidebar: () => <div></div>,
          main: () =>
                <div className="place-order">
                    <h4 style={{textAlign:"left"}}>Order</h4>
                    <input type="text" class="form-control"  placeholder="Your Name" defaultValue={loggedInUser.name} style={{fontWeight:"bold"}}/> <br/>
                    <input type="text" class="form-control"  placeholder="Your Email" defaultValue={loggedInUser.email} style={{fontWeight:"bold"}} />   <br/>
                    <input type="text" class="form-control"  placeholder="Project Title" defaultValue={order.title} style={{fontWeight:"bold"}} disabled/> <br/>
                    <input type="text" class="form-control"  placeholder="Message" onBlur={handleMessage} />   <br/>
                    <input type="text" class="form-control"  placeholder="Price" defaultValue={order.price} style={{fontWeight:"bold"}} disabled /> <br/>
                    <Link to={`/order/${id}/confirmorder`}><button onClick={handleSubmit} className="btn btn-dark">Submit</button></Link>
                </div>
        },
        {
          path: `/order/${id}/confirmorder`,
          exact: true,
          sidebar: () => <div></div>,
          main: () =>
                <div className="place-order">
                    <center>
                      <h4> Your Order Succesfully Received</h4>
                      <p>For further Update Please Contact with Our Developer Team</p>
                      <p>Email: info@creativeagency.com</p>
                    </center>
                </div>
                
        },
        /*******************************************Route For Order End************************************************************/
        
        /*******************************************Route For ServiceList Start************************************************************/
        {
          path: `/order/${id}/orderedservice`,
          sidebar: () => <div></div>,
          main: () =>
        <center>
          <h3>Your Name</h3>
          </center>
        },
        /*******************************************Route For ServiceList End************************************************************/
    
    
    
        /*******************************************Route For Review Start************************************************************/
        {
          path: `/order/${id}/review`,
          sidebar: () => <div></div>,
          main: () =>
                <div className="place-order">
                    <h4 style={{textAlign:"left"}}>Review</h4>
                    <form action="">
                      <input type="text" class="form-control"  placeholder="Your Name" defaultValue={loggedInUser.name} style={{fontWeight:"bold"}} /> <br/>
                      <input type="text" class="form-control"  placeholder="Company Name, Position" required/>   <br/>
                      <input type="text" class="form-control"  placeholder="Your Message" /> <br/>
                      <button className="btn btn-dark">Submit</button>
                    </form>
                </div>
        },
        /*******************************************Route For Review End************************************************************/
    
        /*******************************************Route For Service List Start************************************************************/   
        {
        path: "/admin/",
        exact: true,
        sidebar: () => <div></div>,
        main: () =>
          <h2>You Have No Order Yet!!!</h2>
      },
      /*******************************************Route For Service List End************************************************************/
      
      /*******************************************Route For Add Service Start************************************************************/
      {
        path: "/admin/addservice",
        sidebar: () => <div></div>,
        main: () =>
          <div className="place-order">
              <h4 style={{textAlign:"left"}}>Add Service</h4>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Service Title"/> <br/>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Description" />   <br/>
          <div>
              <input type="file" id="file"/>
              <label for="file" className='btn btn-success'> <FontAwesomeIcon icon={faCloudUploadAlt} style={{marginRight:10}} />Upload Image</label> <br/>
          </div>
              <button className="btn btn-dark">Submit</button>
          </div>
      },
      /*******************************************Route For Add Service End************************************************************/
  
  
  
      /*******************************************Route For Make Admin Start************************************************************/
      {
        path: "/admin/makeadmin",
        sidebar: () => <div></div>,
        main: () =>
          <div className="place-order">
              <h4 style={{textAlign:"left"}}>Make Admin</h4>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter email"/> <br/>
          <div>
          </div>
              <button className="btn btn-dark">Submit</button>
          </div>
      }
      /*******************************************Route For Make Admin End************************************************************/
  

      ];

const [message, setMessage] = useState(""); 
const handleMessage = (event) => {
  setMessage(event.target.value);
    }

const handleSubmit = () =>{
    const confirmOrder = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        orderID: order.id,
        price: order.price,
        orderName: order.title,
        review: message
    };
    fetch('http://localhost:3001/orderPlaced', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(confirmOrder)
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    }
    return (
         <main>
            <div className="d-flex justify-content-between">
                <img src={logo} style={{width:"15%"}} alt=""/>
                <div style={{marginRight:20}}>
                <h4 >{loggedInUser.name}</h4>
                <p>{loggedInUser.email}</p>
                </div>
            </div>
            <Router>
      <div style={{ display: "flex" }}>
        <div>
        <ul style={{listStyle:"none", paddingTop:20}}>
                    <Link to={`/order/${id}`} style={{color:"black", textDecoration:'none'}}><li> <FontAwesomeIcon icon={faShoppingCart} style={{marginRight:10}} /> Order</li></Link> <br/>
                    <Link to={`/order/${id}/orderedservice`} style={{color:"black", textDecoration:'none'}}><li> <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li> </Link> <br/>
                    <Link to={`/order/${id}/review`} style={{color:"black", textDecoration:'none'}}><li> <FontAwesomeIcon icon={faCommentAlt} style={{marginRight:10}} /> Review</li></Link> <br/>
                    <Link to="/admin/" style={{color:"black", textDecoration:'none'}}> <li > <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li></Link> <br/>
                    <Link to="/admin/addservice" style={{color:"black", textDecoration:'none'}}><li > <FontAwesomeIcon icon={faPlus} style={{marginRight:10}} /> Add Service</li></Link> <br/>
                    <Link to="/admin/makeadmin" style={{color:"black", textDecoration:'none'}}><li > <FontAwesomeIcon icon={faUserCheck} style={{marginRight:10}} />Make Admin</li></Link>
                </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>     
        </main>
    );
};

export default Dashboard;