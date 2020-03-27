import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { adminTheme } from '../../theme';

export const Container = styled.section`
    display: flex;
    ${adminTheme.breakpoints.tablet}{
        flex-direction: column;
    }
`;

export const DNav = styled.nav`
    position: fixed;
    width: ${props => props.open ? '300px' : '80px'};
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.open ? 'flex-start' : 'center'};
    padding: ${props => props.open ? '20px' : '20px 0'};
    transition: width 500ms ease;
    z-index: 1;
`;

export const MNav = styled.nav`
    position: fixed;
    width: 100%;
    height: ${props => props.open ? '300px': '80px'};
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: ${props => props.open ? 'flex-start' : 'center'};
    padding: ${props => props.open ? '20px 0' : '0'};
    transition: height 500ms ease;
    z-index: 1;
`;

export const Hamburger = styled.div`
    cursor: pointer;
    margin-right: ${props => props.mobile ? '20px' : '0'};
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    display: ${props => props.open ? 'block' : 'none'};
    color: ${adminTheme.colors.white};
    text-decoration: none;
    margin: 10px 0;
    text-align: center;
    font-size: 2rem;
    font-family: ${adminTheme.font};
`;

export const Main = styled.main`
    margin-left: 80px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${adminTheme.breakpoints.tablet}{
        margin-left: 0;
        margin-top: 80px;
    }
`;

const handleBackgroundColor = color => {
    switch(color){
        case 'spotify':
            return adminTheme.colors.spotify;
        case 'spotifyBlack':
            return adminTheme.colors.spotifyBlack;
        default:
            return adminTheme.colors.black;
    }
}

export const Box = styled.div`
    position: relative;
    width: 40%;
    max-width: 600px;
    min-width: 400px;
    height: 30%;
    margin: 0 50px;
    margin-top: 50px;
    background-color: ${props => handleBackgroundColor(props.color)};
`;

export const ButtonContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 10px;
`;

export const Button = styled.button`
    background-color: ${props => handleBackgroundColor(props.colors)};
    border-radius: 10px;
    border: none;
    color: ${adminTheme.colors.white};
    padding: 10px;
    font-size: 1.5em;
    cursor: pointer;
    margin: 0 10px;    
    &:hover{
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
`;