import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '../styles/home.css';
import Cart from './Components/Cart';

export default function Cartp() {
    return (
        <div>
            <Navbar />
            <Cart />
            <Footer />
        </div>
    )
}
