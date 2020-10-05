import styled from 'styled-components';
import theme from '../../../newTheme';

import { Youtube, Discord, Instagram } from '@styled-icons/boxicons-logos';
import { LogoTiktok } from '@styled-icons/ionicons-solid';

import { Link } from 'react-router-dom';

export const Footer = styled.footer`
    width: 100%;
    background-color: ${theme.colors.neutral.black};
    .footer-wrapper {
        padding: 40px 0;
        width: ${theme.spacing.wrapper};
        max-width: ${theme.spacing.maxWidth};
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .top-row {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 60px;
            .logo-wrapper {
                width: 300px;
                height: 70px;
                display: flex;
                align-items: center;
                img {
                    margin-right: 20px;
                    width: 70px;
                    height: 70px;
                }
            }
            .footer-nav {
                display: flex;
                .col-1, .col-2 {
                    margin: 0 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
            .footer-social {
                width: 300px;
                height: 40px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                a {
                    margin-left: 10px;
                }
            }
        }
        
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.neutral.white};
    font-size: 18px;
    font-family: ${theme.font.family};
    margin: 6px 0;
    transition: .5s ease;
    &:hover {
        color: ${theme.colors.neutral.darkGrey};
        transition: .5s ease;
    }
`;

export const YoutubeIcon = styled(Youtube)`
    width: 40px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
`;

export const DiscordIcon = styled(Discord)`
    width: 30px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
`;

export const TikTokIcon = styled(LogoTiktok)`
    width: 20px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
`;

export const InstagramIcon = styled(Instagram)`
    width: 30px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
`;
