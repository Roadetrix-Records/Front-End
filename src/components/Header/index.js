import React, { useState, useEffect } from 'react';
import { Header, SpotifyLogo, InstagramLogo, YoutubeLogo, StyledLink } from './styles';
import logo from '../../assets/logo.svg';
import { useHistory } from 'react-router-dom';

export default () => {
    const [ selection, setSelection ] = useState(-1);
    const history = useHistory();

    const handleClick = e => {
        setSelection(e.target.id * 1);
    }

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


    return (
        <Header>
            <img src={logo}/>
            <nav>
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
                >Submit Demo</StyledLink>
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
                <a className='social'>
                    <SpotifyLogo/>
                </a>
                <a className='social'>
                    <InstagramLogo/>
                </a>
                <a className='social'>
                    <YoutubeLogo/>
                </a>
            </nav>
        </Header>
    );
}