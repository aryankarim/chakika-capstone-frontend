import React from 'react';
import Header from './Components/Header';
import Howwework from './Components/Howwework';
import About from './Components/About';
import '../styles/home.css';
import Footer from './Components/Footer';


export default function Home() {
    return (
        <div>
            <Header />
            <Howwework />
            <About />
            <Footer />
        </div>
    )
}