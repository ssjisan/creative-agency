import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { useState,createContext } from 'react';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext();
function App() {
const [loggedInUser, setLoggedInUser] = useState({});  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/signIN">
          <Login></Login>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
