import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

// Style Imports
import { MNav, Hamburger, Links, StyledLink } from '../DashboardStyles';

// Navigation Menu that displays on mobile versions
function MobileNav(props){
    return(
        <MNav open={props.open}>
            <Hamburger mobile>
                <HamburgerMenu
                    isOpen={props.open}
                    menuClicked={props.handleClick}
                    color='white'
                />
            </Hamburger>
            <Links>
                <li>
                    <StyledLink to='/submissions' open={props.open}>Submissions</StyledLink>
                </li>
                <li>
                    <StyledLink to='/analytics' open={props.open}>Analytics</StyledLink>
                </li>
                <li>
                    <StyledLink to='/admin' open={props.open} onClick={props.handleLogOut}>Log Out</StyledLink>
                </li>
            </Links>
        </MNav>
    );
}

export default MobileNav;