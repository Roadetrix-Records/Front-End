import styled from 'styled-components';
import theme from '../../../newTheme';
import socialBg from '../../../assets/social-bg.png';

import { Youtube, Instagram } from '@styled-icons/boxicons-logos';
import { LogoTiktok } from '@styled-icons/ionicons-solid';


export const Social = styled.section`
    width: 100%;
    background-image: url(${socialBg});
    background-repeat: no-repeat;
    background-color: ${theme.colors.neutral.black};
    background-attachment: fixed;
    background-position: 20% 120%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .link-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const YoutubeIcon = styled(Youtube)`
    width: 70px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
    ${theme.breakpoints.smTablet}{
        width: 60px;
    }
`;

export const TikTokIcon = styled(LogoTiktok)`
    width: 50px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
    ${theme.breakpoints.smTablet}{
        width: 40px;
    }
`;

export const InstagramIcon = styled(Instagram)`
    width: 60px;
    color: ${theme.colors.primary.spotifyGreen};
    transition: .5s ease;
    &:hover{
        color: ${theme.colors.primary.lightGreen};
        transition: .5s ease;
    }
    ${theme.breakpoints.smTablet}{
        width: 50px;
    }
`;


