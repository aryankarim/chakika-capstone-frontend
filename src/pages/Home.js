import React from 'react';
import Header from './Components/Header';
import Howwework from './Components/Howwework';
import About from './Components/About';
import Search from './Components/Search';
import '../styles/home.css';


export default function Home() {
    return (
        <div>
            <Header />
            <Howwework />
            <About />
            <Search />
        </div>
    )
}