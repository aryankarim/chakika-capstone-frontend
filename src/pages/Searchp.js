import React from 'react'
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchFun from './SearchFun';
import '../styles/home.css';

export default function Searchp() {
    return (
        <div className="s-container">
            <Navbar />
            <Search />
            <SearchFun />
            <Footer />
        </div>
    )
}
