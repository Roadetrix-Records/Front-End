import React, { useState, useEffect } from 'react';
import { Header, SpotifyLogo, InstagramLogo, YoutubeLogo, StyledLink } from './styles';
import logoBlack from '../../assets/logo-black.png';
import logoGrey from '../../assets/logo-grey.png';
import { useHistory } from 'react-router-dom';

export default ({dark}) => {
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
        <Header dark={dark}> 
            <img src={dark ? logoGrey : logoBlack}/>
            <nav>
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
            </nav>
        </Header>
    );
}