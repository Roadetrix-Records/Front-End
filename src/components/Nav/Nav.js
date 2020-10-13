import React, { useState } from 'react';

// Component Imports
import { Link } from 'react-router-dom';
import { 
    Nav, 
    StyledLink,
    DesktopNav,
    MobileNav,
    OpenNav,
} from './navStyles';
import Hamburger from '../Hamburger';

// Asset imports
import logo from '../../assets/logo-white.png';

//TODO: Add support for routing


export default () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [openNav, setOpenNav] = useState(false);

    document.addEventListener('scroll', () => {
        setScrollPosition(window.scrollY);
    })

    return (
        <Nav scrollPosition={scrollPosition} display={openNav}>
            <div className='wrapper'>
                <Link to='/'>
                    <img src={logo} alt='Roadetrix flower'/>
                </Link>
                <DesktopNav>
                    <StyledLink to='/releases'>Releases</StyledLink>
                    <StyledLink to='/submissions'>Submissions</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </DesktopNav>
                <MobileNav onClick={() => setOpenNav(!openNav)}>
                    <Hamburger/>
                </MobileNav>
            </div>
            <OpenNav display={openNav}>
                <div className='open-nav-wrapper'>
                    <StyledLink to='/releases'>Releases</StyledLink>
                    <StyledLink to='/submissions'>Submissions</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </div>
            </OpenNav>
        </Nav>
    )
}