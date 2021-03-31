import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Having a car problem ?</p>
        <h1><span>We've Got You Covered</span></h1>
        <p className="details">If you're having any car related problems, and you want to fix it straight away, Chakika is the way to go, learn about Chakika, and how we serve our customers</p>
        <Link to='#' className="header-btn">About Us</Link>
      </div>
    </div>
  );
}

export default Header;
