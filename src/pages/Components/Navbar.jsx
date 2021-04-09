import React from 'react';
import logo from '../images/logo1.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <div className="menu-icon" for="menu-btn">
            <a href="../Home" className="logo">
              <img src={logo} alt="logo" />
            </a>
        </div>
        <ul className="menu">
            <li><a href="../Home">Home</a></li>
            <li><a href="#">Garage</a></li>
            <li><a href="../Account">Account</a></li>
            <li><a href="../Contact">Contact Us</a></li>
            <li><a href="../Searchp">Search</a></li>
        </ul>
        
    </nav>
  );
}

export default Navbar;
