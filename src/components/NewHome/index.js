import React from 'react';
import Nav from '../Nav/Nav';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import CTA from './CTA/CTA';
import Social from './Social/Social';
import About from './About/About';
import Footer from './Footer/Footer';
import { Home } from './homeStyles';

//TODO: Add support for routing

export default () => {
    return (
        <Home>
            <Nav/>
            <Header/>
            <Playlist/>
            <CTA/>
            <Social/>
            <About/>
            <Footer/>
        </Home>
    );
}