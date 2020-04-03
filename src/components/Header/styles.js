import styled from 'styled-components';
import theme from '../../theme';

import { Spotify, Instagram, Youtube } from '@styled-icons/boxicons-logos'

export const Header = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
            font-size: 1.8rem;
            margin: 0 15px;
            font-family: ${theme.fonts.roboto};
            color: ${theme.colors.darkGrey};
        }
    }
`;

export const SpotifyLogo = styled(Spotify)`
    margin: 0 10px;
    width: 50px;
    color: ${theme.colors.darkGrey};
`;

export const InstagramLogo = styled(Instagram)`
    margin: 0 10px;
    width: 50px;
    color: ${theme.colors.darkGrey};
`;

export const YoutubeLogo = styled(Youtube)`
    margin: 0 10px; 
    width: 50px;
    color: ${theme.colors.darkGrey};
`;