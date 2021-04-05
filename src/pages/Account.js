import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AccountCard from './Components/AccountCard';
import '../styles/home.css';

export default function Account() {
    return (
        <div>
            <Navbar />
            <AccountCard />
            <Footer />
        </div>
    )
}
