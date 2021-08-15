import React from 'react';
import Navbar from './Components/Navbar';
import Howwework from './Components/Howwework';
import Header from './Components/Header';
import About from './Components/About';
import '../styles/home.css';
import Footer from './Components/Footer';
import Discountpanel from './Components/Discountpanel';
import { useSelector } from 'react-redux'


export default function Home() {
    const discountedProducts = useSelector(state => state.discountReducer);

    return (
        <div>
            <Navbar />
            { discountedProducts.length === 0 ? <Header /> : <Discountpanel />}
            <Howwework />
            <About />
            <Footer />
        </div>
    )
}