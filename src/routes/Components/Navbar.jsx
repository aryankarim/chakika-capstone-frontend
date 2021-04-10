import React from 'react';
import { Link } from "react-router-dom"
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <nav>
      <Link to='/' className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/garage'>Garage</Link></li>
        <li><Link to='/account'>Account</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/search'>Search</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
