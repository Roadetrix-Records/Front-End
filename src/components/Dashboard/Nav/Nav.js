import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// Component Imports
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';



function Nav(){
    // Stateful logic for nav open or close
    const [ open, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    // Stateful logic for log out
    const handleLogOut = () => {
        console.log('logout method here');
    }

    // Media Queries for mobile or desktop nav display
    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 799px)'
    })

    return(
        <div>
            {isDesktop && <DesktopNav open={open} handleClick={handleClick} handleLogOut={handleLogOut}/>}
            {isTablet && <MobileNav open={open} handleClick={handleClick} handleLogOut={handleLogOut}/>}
        </div>
    );
}

export default Nav;