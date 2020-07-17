import styled from 'styled-components';
import Background from '../../assets/bg-blurred.png';
import theme from '../../theme';
import { Spotify, Instagram, Youtube, Twitter, Discord } from '@styled-icons/boxicons-logos'

// Styles for parent components on home page
export const Releases = styled.section`
    height: 900px;
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
    @media (max-width: 530px){
        height: 800px;
    }
    @media (max-width: 450px){
        height: 650px;
    }
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
        .header{
            display: flex;
            h2{
                font-family: ${theme.fonts.anton};
                font-size: 3rem;
                color: ${theme.colors.white};
                margin: 50px 0;
                letter-spacing: 2px;
                ${theme.breakpoints.phone}{
                    letter-spacing: 1px;
                    font-size: 2rem;
                }
            }
            .spacer{
                margin: 0 7px;
                ${theme.breakpoints.phone}{
                    margin: 0 4px;
                }
            }
        }
        .bar{
            margin: 0 30px;
            height: 1px;
            width: 100%;
            background-color: ${theme.colors.white};
            ${theme.breakpoints.phone}{
                display: none;
            }
        }
        p{
            font-family: ${theme.fonts.ubuntu};
            color: ${theme.colors.white};
            font-size: 2rem;
            ${theme.breakpoints.phone}{
                font-size: 1.5rem;
            }
        }
        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-left: 10px;
            ${theme.breakpoints.phone}{
                width: 15px;
                height: 15px;
            }
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
        @media (max-width: 530px){
            width: 170px;
            height: 170px;
        }
        ${theme.breakpoints.phone}{
            width: 150px;
            height: 150px;
        }
        @media (max-width: 400px){
            width: 130px;
            height: 130px;
        }
    }
    .text-container{
        margin-left: 50px;
        width: 200px;
        ${theme.breakpoints.phone}{
            margin-left: 30px;
        }
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
            width: 100%;
            p {
                color: inherit;
                font-size: 1.8rem;
                font-family: ${theme.fonts.ubuntu};
                margin-left: 5px;
                @media (max-width: 400px){
                    font-size: 1.5rem;
                }
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
        @media (max-width: 1300px){
            width: 200px;
            height: 200px;
        }
        @media (max-width: 1050px){
            width: 250px;
            height: 250px;
        }
        @media (max-width: 1000px){
            width: 230px;
            height: 230px;
        }
        @media (max-width: 900px){
            width: 200px;
            height: 200px;
        }
        @media (max-width: 800px){
            width: 250px;
            height: 250px;
        }
        @media (max-width: 650px){
            width: 230px;
            height: 230px;
        }
        @media (max-width: 600px){
            width: 200px;
            height: 200px;
        }
        @media (max-width: 530px){
            width: 170px;
            height: 170px;
        }
        ${theme.breakpoints.phone}{
            width: 150px;
            height: 150px;
        }
        @media (max-width: 400px){
            width: 130px;
            height: 130px;
        }
        @media (max-width: 360px){
            width: 115px;
            height: 115px;
        }
    }
    p{
        margin-top: 10px;
        font-family: ${theme.fonts.roboto};
        color: ${theme.colors.lightPink};
        text-align: center;
        font-size: 1.8rem;
    }
    @media (max-width: 1600px){
        display: ${props => props.index === 5 && 'none'};
    }
    @media (max-width: 1050px){
        display: ${props => props.index === 4 && 'none'};
    }
    @media (max-width: 800px){
        display: ${props => props.index === 3 && 'none'};
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
        ${theme.breakpoints.phone}{
            font-size: 2.5rem;
        }
    }
    .social-container {
        width: 100%;
        .social-links {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 80%;
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
                    @media (max-width: 920px){
                        font-size: 2rem;
                    }
                }
            }
        }
    }
`;

export const PlaylistContainer = styled.section`
    position: relative;
    height: 600px;
    background-color: ${theme.spotify.black};   
    @media (max-width: 915px){
        height: 500px;
    } 
    @media (max-width: 750px){
        height: 700px;
    }
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
        @media (max-width: 750px){
            flex-wrap: wrap;
            justify-content: center;
            width: 450px;
        }
        @media (max-width: 450px){
            width: 320px;
        }
        .card{
            width: 300px;
            margin: 0 10px;
            @media (max-width: 1300px){
                width: 250px;
            }
            @media (max-width: 1130px){
                width: 200px;
            }
            @media (max-width: 915px){
                width: 150px;
            }
            @media (max-width: 750px){
                width: 140px;
                margin-bottom: 50px;
            }
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
            a{
                text-decoration: none;
            }
            .details-btn{
                width: 100%;
                height: 40px;
                background-color: ${theme.colors.lightPink};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                cursor: pointer;
                margin-bottom: 10px;
                @media (max-width: 915px){
                    height: 30px;
                }
                p{
                    font-size: 2rem;
                    font-family: ${theme.fonts.ubuntu};
                    color: ${theme.colors.white};
                    @media (max-width: 915px){
                        font-size: 1.5rem;
                    }
                }
                &:hover{
                    background-color: rgba(255, 255, 255, 0);
                    border: 1px solid ${theme.colors.lightPink};
                    width: calc(100% - 2px);
                    height: 38px;
                    @media (max-width: 915px){
                        height: 28px;
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
                @media (max-width: 915px){
                    height: 30px;
                }
                p{
                    font-size: 2rem;
                    font-family: ${theme.fonts.ubuntu};
                    color: ${theme.colors.white};
                    @media (max-width: 915px){
                        font-size: 1.5rem;
                    }
                }
                &:hover{
                    background-color: rgba(255, 255, 255, 0);
                    border: 1px solid ${theme.spotify.darkGreen};
                    width: calc(100% - 2px);
                    height: 38px;
                    @media (max-width: 915px){
                        height: 28px;
                    }
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
        @media (max-width: 915px){
            height: 400px;
        }
        @media (max-width: 750px){
            height: 250px;
        }
    }
    #bg2{
        height: 100%;
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
                ${theme.breakpoints.phone}{
                    width: 40px;
                }
            }
            p{
                margin-left: 10px;
                ${theme.breakpoints.phone}{
                    font-size: 1.3rem;
                }
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
            ${theme.breakpoints.phone}{
                font-size: 1.5rem;
            }
        }
        &:hover{
            border: 1px solid ${theme.colors.darkPink};
            width: 298px;
            height: 48px;
            color: ${theme.colors.darkPink};
            background: rgba(255, 255, 255, 0);
            ${theme.breakpoints.phone}{
                width: 248px;
                height: 38px;
            }
        }
        ${theme.breakpoints.phone}{
            width: 250px;
            height: 40px;
        }
    }
`;

// Logos
export const SpotifyLogo = styled(Spotify)`
    width: 30px;
    margin-right: 5px;
    color: inherit;
    @media (max-width: 400px){
        width: 20px;
    }
`;

export const SpotifySocial = styled(Spotify)`
    color: ${theme.spotify.black};
    width: 70px;
    @media (max-width: 920px){
        width: 60px;
    }
    ${theme.breakpoints.phone}{
        width: 50px;
    }
`;

export const InstagramSocial = styled(Instagram)`
    color: ${theme.spotify.black};
    width: 70px;
    @media (max-width: 920px){
        width: 60px;
    }
    ${theme.breakpoints.phone}{
        width: 50px;
    }
`;

export const YouTubeSocial = styled(Youtube)`
    color: ${theme.spotify.black};
    width: 70px;
    @media (max-width: 920px){
        width: 60px;
    }
    ${theme.breakpoints.phone}{
        width: 50px;
    }
`;

export const DiscordSocial = styled(Discord)`
    color: ${theme.spotify.black};
    width: 70px;
    @media (max-width: 920px){
        width: 60px;
    }
    ${theme.breakpoints.phone}{
        width: 50px;
    }
`;

export const TwitterSocial = styled(Twitter)`
    color: ${theme.spotify.black};
    width: 70px;
    @media (max-width: 920px){
        width: 60px;
    }
    ${theme.breakpoints.phone}{
        width: 50px;
    }
`;

