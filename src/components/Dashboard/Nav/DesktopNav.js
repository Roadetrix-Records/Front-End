import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

// Style Imports
import { DNav, Hamburger, Links, StyledLink } from '../DashboardStyles';

// Navigation Menu that displays on desktop versions
function DesktopNav(props){
    return(
        <DNav open={props.open}>
            <Hamburger>
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
        </DNav>
    );
}

export default DesktopNav;