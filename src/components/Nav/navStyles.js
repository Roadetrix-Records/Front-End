import styled from 'styled-components';
import theme from '../../newTheme';
import { Link } from 'react-router-dom';

import {Spotify} from '@styled-icons/boxicons-logos/';

export const Nav = styled.nav`
    width: 100%;
    height: 90px;
    position: fixed;
    transition: .5s ease;
    .wrapper {
        max-width: 1400px;
        padding: 10px 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        height: 70px;
        img {
            width: 70px;
            height: 70px;
        }
        .btn-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
        }  
    } 
    ${props => props.scrollPosition > 30 && `
        height: 90px;
        background-color: ${theme.colors.neutral.black};
        transition: .5s ease;
    `}
    z-index: 999;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: 18px;
    color: ${theme.colors.neutral.white};
    transition: .5s ease;
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