import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

// Style Imports
import { Container, Nav, Hamburger } from './DashboardStyles';

function Dashboard(){
    const [ open, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <Container>
            <Nav>
                <Hamburger>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClick}
                        color='white'
                    />
                </Hamburger>
            </Nav>
        </Container>
    )
}

export default Dashboard;