import React from 'react';
import { StyledLink, DesktopNav } from './styles';

export default ({ dark, handleClick, selection }) => {
    return (
        <DesktopNav>
            <StyledLink 
                to='/'
                id={0}
                onClick={handleClick}
                selected={selection === 0}
                dark={dark}
            >Home</StyledLink>
            <StyledLink 
                to='/releases'
                id={1}
                onClick={handleClick}
                selected={selection === 1}
                dark={dark}
            >Releases</StyledLink>
            <StyledLink 
                to='/submissions'
                id={2}
                onClick={handleClick}
                selected={selection === 2}
                dark={dark}
            >Submit Demo</StyledLink>
            <StyledLink 
                to='/about'
                id={3}
                onClick={handleClick}
                selected={selection === 3}
                dark={dark}
            >About</StyledLink>
            <StyledLink 
                to='/contact'
                id={4}
                onClick={handleClick}
                selected={selection === 4}
                dark={dark}
            >Contact</StyledLink>
        </DesktopNav>
    );
}