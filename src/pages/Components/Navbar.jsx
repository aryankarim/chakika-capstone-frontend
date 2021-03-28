import React from 'react';
import logo from '../images/logo1.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <a href="#" className="logo">
            <img src={logo} alt="logo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Garage</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="../Searchp">Search</a></li>
        </ul>
        
    </nav>
  );
}

export default Navbar;
