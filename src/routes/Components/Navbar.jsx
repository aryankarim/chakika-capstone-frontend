import React from 'react';
import { Link } from "react-router-dom"
import logo from '../images/logo1.png';

function Navbar() {
  return (
    <nav>
      <Link to='/' className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#'>Garage</Link></li>
        <li><Link to='#'>Categories</Link></li>
        <li><Link to='#'>Account</Link></li>
        <li><Link to='#'>About Us</Link></li>
        <li><Link to='/search'>Search</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
