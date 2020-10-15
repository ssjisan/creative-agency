import React from 'react';
import './Order.css';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
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
  
const Order = () => {
    const {id} = useParams();
    const order = fakedata.find (order=> order.id == id);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const routes = [
        /*******************************************Route For Service List Start************************************************************/   
        {
          path: `/order/${id}`,
          exact: true,
          sidebar: () => <div></div>,
          main: () =>
                <div className="place-order">
                    <h4 style={{textAlign:"left"}}>Order</h4>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" defaultValue={loggedInUser.name} style={{fontWeight:"bold"}}/> <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email" defaultValue={loggedInUser.email} style={{fontWeight:"bold"}} />   <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Project Title" defaultValue={order.title} style={{fontWeight:"bold"}} disabled/> <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Message" />   <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Price" /> <br/>
                    <Link to={`/order/${id}/servicelist`}><button onClick={handleSubmit} className="btn btn-dark">Submit</button></Link>
                </div>
        },
        /*******************************************Route For Service List End************************************************************/
        
        /*******************************************Route For Add Service Start************************************************************/
        {
          path: `/order/${id}/servicelist`,
          sidebar: () => <div></div>,
          main: () =>
            <center><h2>Order Received </h2> </center>
        },
        /*******************************************Route For Add Service End************************************************************/
    
    
    
        /*******************************************Route For Make Admin Start************************************************************/
        {
          path: `/order/${id}/review`,
          sidebar: () => <div></div>,
          main: () =>
                <div className="place-order">
                    <h4 style={{textAlign:"left"}}>Review</h4>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" /> <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Company Name, Position" />   <br/>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Message" /> <br/>
                    <button className="btn btn-dark">Submit</button>
                </div>
        }
        /*******************************************Route For Make Admin End************************************************************/
    
      ];
    

const handleSubmit = () =>{
    const confirmOrder = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        orderID: order.id,
        orderName: order.title,
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
                    <Link to={`/order/${id}`}><li> <FontAwesomeIcon icon={faShoppingCart} style={{marginRight:10}} /> Order</li></Link> <br/>
                    <Link to={`/order/${id}/servicelist`}><li> <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li> </Link> <br/>
                    <Link to={`/order/${id}/review`}><li> <FontAwesomeIcon icon={faCommentAlt} style={{marginRight:10}} /> Review</li></Link>
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
            <div className="list">
                
            </div>
            
            
           
        </main>
    );
};

export default Order;