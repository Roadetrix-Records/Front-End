import styled from 'styled-components';
import theme from '../../newTheme';
import { Link } from 'react-router-dom';

import {Spotify} from '@styled-icons/boxicons-logos/';

export const Nav = styled.nav`
    width: 100%;
    height: 90px;
    position: fixed;
    .wrapper {
        max-width: ${theme.spacing.maxWidth};
        padding: 10px 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: ${theme.spacing.wrapper};
        height: 70px;
        img {
            width: 70px;
            height: 70px;
        } 
    } 
    ${props => !props.display && props.scrollPosition > 30 && `
        transition: .5s ease;
    `}
    ${props => props.display && `
        background-color: ${theme.colors.neutral.black};
    `}
    ${props => props.scrollPosition > 30 && `
        height: 90px;
        background-color: ${theme.colors.neutral.black};
    `}
    z-index: 999;
`;

export const DesktopNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    ${theme.breakpoints.tablet}{
        display: none;
    }
`;

export const MobileNav = styled.div`
    ${theme.breakpoints.minTablet}{
        display: none;
    }
`;

export const OpenNav = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${theme.colors.neutral.black};
    display: ${props => props.display ? 'block' : 'none'};
    padding-bottom: 20px;
    .open-nav-wrapper {
        width: ${theme.spacing.wrapper};
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
    }
    ${theme.breakpoints.minTablet}{
        display: none;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: 18px;
    color: ${theme.colors.neutral.white};
    transition: .5s ease;
    user-select: none;
    &:hover{
        color: ${theme.colors.neutral.darkGrey};
        transition: .5s ease;
    }
`;

export const Button = styled.div`
    border: 1px solid ${theme.colors.neutral.white};
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 35px;
    color: ${theme.colors.neutral.white};
    font-family: ${theme.font.family};
    font-size: 18px;
    cursor: pointer;
    &:hover{
        color: ${theme.colors.neutral.black};
        background-color: ${theme.colors.neutral.white};
        transition: .5s ease;
    }
`;

export const SpotifyIcon = styled(Spotify)`
    width: 30px;
    height: 30px;
`;