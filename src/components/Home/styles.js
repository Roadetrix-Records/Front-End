import styled from 'styled-components';
import Background from '../../assets/flower-bg.png';
import theme from '../../theme';
import { Spotify, Instagram, Youtube, Twitter, Discord } from '@styled-icons/boxicons-logos'

// Styles for parent components on home page
export const Releases = styled.section`
    width: 100%;
    height: 900px;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
`;

// Styles for Recent component
export const Recent = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .see-all {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-family: ${theme.fonts.anton};
            font-size: 3rem;
            color: ${theme.colors.white};
            margin: 50px 0;
            letter-spacing: 2px;
        }
        .spacer{
            margin: 0 7px;
        }
        .bar{
            margin: 0 30px;
            height: 1px;
            width: 100%;
            background-color: ${theme.colors.white};
        }
        p{
            font-family: ${theme.fonts.ubuntu};
            color: ${theme.colors.white};
            font-size: 2rem;
        }
        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-left: 10px;
        }
        .link{
            display: flex;
            align-items: center;
        }
        a{
            text-decoration: none;
        }
    }
    
    .recent-releases{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 100px;
    }
`;

// Styles for Card component
export const FeaturedCard = styled.div`
    display: flex;
    margin-top: 50px;
    .img-container{
        width: 250px;
        height: 250px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .img-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${theme.colors.darkGrey};
            opacity: 0;
            &:hover {
                opacity: 0.2;
                transition: opacity 0.5s ease;
            }
        }
    }
    .text-container{
        margin-left: 50px;
        h3{
            color: ${theme.colors.white};
            font-family: ${theme.fonts.anton};
            font-size: 4rem;
            letter-spacing: 2px;
        }
        p{
            font-family: ${theme.fonts.ubuntu};
        }
        .album{
            margin-top: 10px;
            color: ${theme.colors.lightPink};
            font-size: 2rem;
        }
        .save-to-playlist {
            margin-top: 10px;
            background-color: ${theme.spotify.lightGreen};
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 5px 0;
            width: 200px;
            p {
                color: inherit;
                font-size: 1.8rem;
                font-family: ${theme.fonts.ubuntu};
                margin-left: 5px;
            }
            &:hover{
                border: 1px solid ${theme.spotify.lightGreen};
                background-color: rgba(255, 255, 255, 0);
                width: 199px;
                color: ${theme.spotify.lightGreen};
            }
        }
    }
`;

export const RecentCard = styled.div`
    margin-right: 50px;
    h3{
        font-family: ${theme.fonts.anton};
        color: ${theme.colors.white};
        text-align: center;
        font-size: 2rem;
        margin-top: 20px;
        letter-spacing: 1px;
    }
    .img-container{
        width: 250px;
        height: 250px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .img-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${theme.colors.darkGrey};
            opacity: 0;
            &:hover {
                opacity: 0.2;
                transition: opacity 0.5s ease;
            }
        }
    }
    p{
        margin-top: 10px;
        font-family: ${theme.fonts.roboto};
        color: ${theme.colors.lightPink};
        text-align: center;
        font-size: 1.8rem;
    }
`;

// Styles for Social Container
export const SocialContainer = styled.section`
    h1 {
        font-family: ${theme.fonts.ubuntu};
        font-size: 3rem;
        text-align: center;
        margin-top: 30px;
    }
    .social-links {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 900px;
        a{
            text-decoration: none;
        }
        .social {
            margin: 20px;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            h2 {
                font-family: ${theme.fonts.anton};
                font-size: 2.5rem;
                color: ${theme.colors.lightGrey};
                letter-spacing: 3px;
                &:hover{
                    color: ${theme.colors.lightPink};
                }
            }
        }
    }
`;

export const PlaylistContainer = styled.section`
    position: relative;
    height: 600px;
    background-color: ${theme.spotify.black};
    padding-left: 10%;
    h1{
        color: ${theme.spotify.darkGreen};
        font-size: 4rem;
        font-family: ${theme.fonts.anton};
        letter-spacing: 2px;
        display: inline-block;
        padding-top: 40px;
        z-index: 2;
        position: absolute;
    }
    #bg1{
        height: 500px;
        opacity: 0.5;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    #bg2{
        height: 100%;;
        position: absolute;
        right: 0;
        opacity: 0.5;
        z-index: 1;
    }
`;

export const SubmissionsContainer = styled.section`
    h1{
        font-family: ${theme.fonts.ubuntu};
        font-size: 3rem;
        text-align: center;
        margin-top: 30px;
    }
`;

// Logos
export const SpotifyLogo = styled(Spotify)`
    width: 30px;
    margin-right: 5px;
    color: inherit;
`;

export const SpotifySocial = styled(Spotify)`
    color: ${theme.spotify.black};
    width: 70px;
`;

export const InstagramSocial = styled(Instagram)`
    color: ${theme.spotify.black};
    width: 70px;
`;

export const YouTubeSocial = styled(Youtube)`
    color: ${theme.spotify.black};
    width: 70px;
`;

export const DiscordSocial = styled(Discord)`
    color: ${theme.spotify.black};
    width: 70px;
`;

export const TwitterSocial = styled(Twitter)`
    color: ${theme.spotify.black};
    width: 70px;
`;

