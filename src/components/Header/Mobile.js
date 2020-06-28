import React from 'react';
import { MobileNav, Hamburger, Menu, Links, StyledLink } from './styles';

export default ({ dark, open, toggleOpen, handleClick, selection }) => {
    return (
        <MobileNav>
            <Hamburger onClick={toggleOpen} open={open}>
                <div/>
                <div/>
                <div/>
            </Hamburger>
            <Menu open={open}/>
            <Links open={open}>
                <div className='links'>
                    <div className='link-container'>
                        <StyledLink 
                            to='/'
                            id={0}
                            onClick={handleClick}
                            selected={selection === 0}
                            dark={true}
                        >Home</StyledLink>
                    </div>
                    <div className='link-container'>
                        <StyledLink 
                            to='/releases'
                            id={1}
                            onClick={handleClick}
                            selected={selection === 1}
                            dark={true}
                        >Releases</StyledLink>
                    </div>
                    <div className='link-container'>
                        <StyledLink 
                            to='/submissions'
                            id={2}
                            onClick={handleClick}
                            selected={selection === 2}
                            dark={true}
                        >Submit Demo</StyledLink>
                    </div>
                    <div className='link-container'>
                        <StyledLink 
                            to='/about'
                            id={3}
                            onClick={handleClick}
                            selected={selection === 3}
                            dark={true}
                        >About</StyledLink>
                    </div>
                    <div className='link-container'>
                        <StyledLink 
                            to='/contact'
                            id={4}
                            onClick={handleClick}
                            selected={selection === 4}
                            dark={true}
                        >Contact</StyledLink>
                    </div>
                </div>
            </Links>
        </MobileNav>
    );
}