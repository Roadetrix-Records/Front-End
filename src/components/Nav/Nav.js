import React, { useState, useEffect } from 'react';
import { Nav, Link, Button, SpotifyIcon } from './navStyles';
import logo from '../../assets/logo-white.png';

export default () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    document.addEventListener('scroll', () => {
        setScrollPosition(window.scrollY);
    })

    return (
        <Nav scrollPosition={scrollPosition}>
            <div className='wrapper'>
                <img src={logo}/>
                <div className='btn-wrapper'>
                    <Link>Releases</Link>
                    <Link>Submissions</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Button>
                        <SpotifyIcon/>
                        Log In
                    </Button>
                </div>
            </div>
            
        </Nav>
    )
}