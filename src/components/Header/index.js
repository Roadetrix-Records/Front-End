import React from 'react';
import { Header, SpotifyLogo, InstagramLogo, YoutubeLogo } from './styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <Header>
            <img src={logo}/>
            <nav>
                <Link to=''>Home</Link>
                <Link to=''>Releases</Link>
                <Link to=''>Submit Demo</Link>
                <Link to=''>About</Link>
                <Link to=''>Contact</Link>
                <SpotifyLogo/>
                <InstagramLogo/>
                <YoutubeLogo/>
            </nav>
        </Header>
    );
}