import React from 'react';

import "./Menu.css";
import { Link } from 'react-router-dom';



const MainMenu = () => {
    return (

        <React.Fragment>

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Animal Manager</Link>
    </div>
    <ul className="nav navbar-nav navbar-left">
      <li className="active"><Link to="/">Home</Link></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>


        </React.Fragment>


    );
}

export default MainMenu;