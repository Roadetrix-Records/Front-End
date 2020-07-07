import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.dark ? 'rgba(255, 255, 255, 0)' : theme.colors.white};
    img{
        margin-left: 20px;
        width: 250px;
        @media (max-width: 500px){
            width: 200px;
        }
    }
`;

export const DesktopNav = styled.nav`
    margin-right: 20px;
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
    }
    .social{
        margin: 0;
        cursor: pointer;
    }
    @media (max-width: 1000px){
        display: none;
    }
`;

export const MobileNav = styled.nav`
    @media(min-width: 1001px){
        display: none;
    }
`;

export const Hamburger = styled.div`
    margin-right: 20px;
    width: 40px;
    cursor: pointer;
    z-index: 9999;
    position: absolute;
    top: 25px;
    right: 0;
    div{
        width: 100%;
        background-color: ${props => props.open ? theme.colors.white : theme.colors.grey};
        height: 5px;
        margin: 8px 0;
        border-radius: 2px;
        transition: background-color 0.5s ease;
    }
`;

export const Menu = styled.div`
    position: absolute;
    top: 0;
    z-index: 999;
    right: 0;
    width: ${props => props.open ? '300px' : '0'};
    height: 100vh;
    // background: rgb(0,0,0);
    // background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    background-color: ${theme.colors.darkGrey};
    transition: width 0.5s ease;
    @media(max-width: 400px){
        width: ${props => props.open ? '200px' : '0'};
    }
`;

export const Links = styled.div`
    z-index: 9999;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 5px;
    opacity: ${props => props.open ? '1' : '0'};
    transition: opacity 0.25s ease-in-out;
    .link-container{
        width: 100%;
        margin: 20px 0;
        text-align: right;
        a{
            text-decoration: none;
        }
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1.8rem;
    margin: 0 15px;
    font-family: ${theme.fonts.ubuntu};
    color: ${props => props.selected ? theme.colors.darkPink : props.dark ? theme.colors.grey : theme.colors.darkGrey};
    &:hover{
        color: ${theme.colors.darkPink};
        transition: color .5s ease;
    }
`;