import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderContainer, LogoContainer, Title, Nav, StyledLink, Img } from './HeaderStyles';
import logo from '../../assets/logo.png'

function Header(){
    const [ selection, setSelection ] = useState(-1);
    const history = useHistory();
    
    function handleClick(e){
        setSelection(e.target.id * 1);
    }

    // Stateful logic in order to keep track of what page the user is on
    useEffect(() => {
        switch(history.location.pathname){
            case '/':
                setSelection(0);
                break;
            case '/releases':
                setSelection(1);
                break;
            case '/submissions':
                setSelection(2);
                break;
            case '/about':
                setSelection(3);
                break;
            case '/contact':
                setSelection(4);
                break;
            default:
                break;
        }
    }, [history.location.pathname])

    return(
        <HeaderContainer>
            <LogoContainer>
                <Title>Roadetrix</Title>
                <Img src={logo}></Img>
                <Title>Records</Title>
            </LogoContainer>
            <Nav>
                <StyledLink 
                    to='/'
                    id={0}
                    onClick={handleClick}
                    selected={selection === 0}
                >Home</StyledLink>
                <StyledLink 
                    to='/releases'
                    id={1}
                    onClick={handleClick}
                    selected={selection === 1}
                >Releases</StyledLink>
                <StyledLink 
                    to='/submissions'
                    id={2}
                    onClick={handleClick}
                    selected={selection === 2}
                >Submissions</StyledLink>
                <StyledLink 
                    to='/about'
                    id={3}
                    onClick={handleClick}
                    selected={selection === 3}
                >About</StyledLink>
                <StyledLink 
                    to='/contact'
                    id={4}
                    onClick={handleClick}
                    selected={selection === 4}
                >Contact</StyledLink>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;