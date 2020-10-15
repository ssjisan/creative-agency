import React from 'react';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCheck } from '@fortawesome/free-solid-svg-icons'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const routes = [
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

const Admin = () => {
    return (
        <main>
            <div className="d-flex justify-content-between">
                <img src={logo} style={{width:"15%"}} alt=""/>
                <h4 style={{marginRight:20}}>Name</h4>
            </div>
            <Router>
      <div style={{ display: "flex" }}>
        <div style={{paddingTop:20}}>
          <ul style={{listStyle:"none",textDecoration:"none"}}>
                    <Link to="/admin/"><li > <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li></Link> <br/>
                    <Link to="/admin/addservice"><li > <FontAwesomeIcon icon={faPlus} style={{marginRight:10}} /> Add Service</li></Link> <br/>
                    <Link to="/admin/makeadmin"><li > <FontAwesomeIcon icon={faUserCheck} style={{marginRight:10}} />Make Admin</li></Link>
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

export default Admin;