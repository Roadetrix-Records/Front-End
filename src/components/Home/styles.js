import styled from 'styled-components';
import Background from '../../assets/bg-blurred.png';
import theme from '../../theme';
import { Spotify, Instagram, Youtube, Twitter, Discord } from '@styled-icons/boxicons-logos'

// Styles for parent components on home page
export const Releases = styled.section`
    height: 900px;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
`;

// Styles for Recent component
export const Recent = styled.div`
    max-width: 1500px;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .latest-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .see-all {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1500px;
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
            .margin{
                margin-right: 6px;
            }
        }
        a{
            text-decoration: none;
        }
    }
    .recent-releases{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1500px;
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
        @media (max-width: 1000px){
            width: 200px;
            height: 200px;
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
        @media (max-width: 1000px){
            width: 200px;
            height: 200px;
            display: ${props => props.index === 3 ? 'none' : 'block'};
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
        font-weight: bold;
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
    .content-container{
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            font-family: ${theme.fonts.anton};
            font-size: 4rem;
            color: ${theme.spotify.darkGreen};
            margin-bottom: 40px;

        }
    }
    .playlists{
        display: flex;
        .card{
            width: 300px;
            margin: 0 10px;
            .img-container{
                position: relative;
                img{
                    width: 100%;
                    margin-bottom: 20px;
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
            
            .follow-btn{
                width: 100%;
                height: 40px;
                background-color: ${theme.spotify.darkGreen};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                cursor: pointer;
                p{
                    font-size: 2rem;
                    font-family: ${theme.fonts.ubuntu};
                    color: ${theme.colors.white};
                }
                &:hover{
                    background-color: rgba(255, 255, 255, 0);
                    border: 1px solid ${theme.spotify.darkGreen};
                    width: calc(100% - 2px);
                    height: 38px;
                }
            }
        }
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
        bottom: 0;
        opacity: 0.5;
        z-index: 1;
    }
`;

export const SubmissionsContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    a{
        text-decoration: none;
    }
    h1{
        font-family: ${theme.fonts.ubuntu};
        font-size: 3rem;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 15px;
        font-weight: bold;
    }
    p{
        text-align: center;
        font-size: 1.7rem;
        margin-bottom: 5px;
        font-family: ${theme.fonts.ubuntu};
        span{
            color: ${theme.colors.darkPink};
        }
    }
    .example-container{
        margin: 20px;
        display: flex;
        .display{
            height: 60px;
            display: flex;
            align-items: center;
            margin: 10px;
            img{
                width: 60px;
            }
            p{
                margin-left: 10px;
            }
        }
    }
    .cta-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 50px;
        background: rgb(255,165,162);
        background: linear-gradient(270deg, rgba(255,165,162,1) 0%, rgba(246,177,177,1) 100%);
        border-radius: 10px;
        cursor: pointer;
        color: ${theme.colors.white};
        margin-bottom: 30px;
        p{
            color: inherit;
            font-size: 2rem;
        }
        &:hover{
            border: 1px solid ${theme.colors.darkPink};
            width: 298px;
            height: 48px;
            color: ${theme.colors.darkPink};
            background: rgba(255, 255, 255, 0);
        }
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

