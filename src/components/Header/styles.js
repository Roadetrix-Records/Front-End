import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';

import { Spotify, Instagram, Youtube } from '@styled-icons/boxicons-logos'

export const Header = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.dark ? theme.colors.black : theme.colors.white};
    img{
        margin-left: 20px;
        width: 250px;
    }
    nav{
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
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1.8rem;
    margin: 0 15px;
    font-family: ${theme.fonts.roboto};
    color: ${props => props.selected ? theme.colors.darkPink : props.dark ? theme.colors.grey : theme.colors.darkGrey};
    &:hover{
        color: ${theme.colors.darkPink};
        transition: color .5s ease;
    }
`;