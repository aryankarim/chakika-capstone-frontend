import React from 'react'
import SearchSection from './Components/SearchSection';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchFun from './pages/SearchFun';
import '../styles/home.css';

export default function Search() {
    return (
        <div className="s-container">
            <Navbar />
            <SearchSection />
            <SearchFun />
            <Footer />
        </div>
    )
}
