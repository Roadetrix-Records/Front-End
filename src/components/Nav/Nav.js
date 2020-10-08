import React, { useState } from 'react';
import { 
    Nav, 
    StyledLink,
    //Button, 
    //SpotifyIcon 
} from './navStyles';
import logo from '../../assets/logo-white.png';

export default () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    document.addEventListener('scroll', () => {
        setScrollPosition(window.scrollY);
    })

    return (
        <Nav scrollPosition={scrollPosition}>
            <div className='wrapper'>
                <img src={logo} alt='Roadetrix flower'/>
                <div className='btn-wrapper'>
                    <StyledLink to='/releases'>Releases</StyledLink>
                    <StyledLink to='/submissions'>Submissions</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                    {/* <Button>
                        <SpotifyIcon/>
                        Log In
                    </Button> */}
                </div>
            </div>
        </Nav>
    )
}