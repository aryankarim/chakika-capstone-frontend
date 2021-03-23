import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="intro">
        <p>Having a car problem ?</p>
        <h1><span>We've Got You Covered</span></h1>
        <p className="details">If you're having any car related problems, and you want to fix it straight away, Chakika is the way to go, learn about Chakika, and how we serve our customers</p>
        <a href="#" className="header-btn">About Us</a>
      </div>
    </div>
  );
}

export default Header;
