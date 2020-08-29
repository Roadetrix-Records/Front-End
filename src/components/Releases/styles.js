import styled from 'styled-components';
import theme from '../../theme';
import { Search } from '@styled-icons/boxicons-regular/';
import { Close } from '@styled-icons/evaicons-solid/';
import { Spotify } from '@styled-icons/boxicons-logos/';

export const Releases = styled.section`
    
`;

export const Featured = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ImgContainer = styled.div`
    ${props => props.img && `
        background-image: url(${props.img})
    `};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    margin: 5px 0;
    overflow: hidden;
    position: absolute;
`;

export const FeaturedInfo = styled.section`
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 100%;
        margin-right: 10px;
    }
    .info{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .featured-header{
            h1{
                font-family: ${theme.fonts.anton};
                font-size: 3.5rem;
                color: ${theme.colors.white};
            }
            p{
                font-family: ${theme.fonts.ubuntu};
                font-size: 2rem;
                color: ${theme.colors.lightPink};
            }
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.color === 'white' ? theme.colors.white : theme.colors.lightGrey};
    margin: 10px 0;
`;

export const SubHeader = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    height: 50px;
    .search-bar-wrapper{
        display: flex;
        justify-content: flex-end;
        .search-bar{
            display: flex;
            align-items: center;
            input{
                width: 300px;
                height: 30px;
                border: 1px solid ${theme.colors.lightGrey};
                border-radius: 20px;
                outline: none;
                padding-left: 10px;
                font-size: 1.5rem;
                font-family: ${theme.fonts.ubuntu};
                &:focus{
                    border: 1px solid ${theme.colors.lightPink};
                }
            }
        }
    }
`;

export const ReleaseWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ReleaseContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ReleaseCard = styled.div`
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    margin: 10px;
    width: 250px;
    img{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .info-container{
        display: flex;
        justify-content: space-between;
        margin: 10px;
        h2{
            font-size: 1.5rem;
            font-family: ${theme.fonts.ubuntu};
            color: ${theme.colors.lightGrey};
        }
    }
    &:hover{
        transform: scale(1.01);
    }
`;

export const Details = styled.div`
    width: 350px;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img-container{
        width: 100%;
        position: relative;
        .logo-wrapper{
            position: absolute;
            right: 10px;
            top: 10px;
        }
        .label-wrapper{
            position: absolute;
            left: 0;
            bottom: 2px;
            a{
                text-decoration: none;
            }
            .label{
                background-color: ${theme.spotify.darkGreen};
                width: 90px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    font-family: ${theme.fonts.ubuntu};
                    font-size: 1.5rem;
                    color: ${theme.colors.white};
                }
            }
        }
        img{
            width: 100%;
        }
    }
    .main-info{
        margin: 10px 0;
        margin-left: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .album-name{
            display: flex;
            align-items: center;
            h3{
                color: ${theme.colors.lightGrey};
                font-family: ${theme.fonts.anton};
                font-size: 3rem;
                margin-bottom: 5px;
                margin-right: 5px;
            }
        }
        p{
            color: ${theme.colors.lightGrey};
            font-family: ${theme.fonts.ubuntu};
            font-size: 1.5rem;
        }
        a{
            text-decoration: none;
        }
    }
    .tracks{
        width: 100%;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2{
            color: ${theme.colors.lightGrey};
            font-family: ${theme.fonts.anton};
            font-size: 2rem;

        }
    }
    .btn-container{
        width: 100%;
        display: flex;
    }
`;

export const Artist = styled.div`
    margin: 3px 0;
    display: flex;
    align-items: center;
    color: ${theme.colors.lightGrey};
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &:hover{
        color: ${theme.spotify.darkGreen} !important;
    }
`;

export const Button = styled.div`
    cursor: pointer;
    margin-top: 10px;
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.lightPink};
    border: 1px solid ${theme.colors.lightPink};
    border-radius: 10px;
    color: ${theme.colors.white};
    p{
        font-family: ${theme.fonts.ubuntu};
        font-size: 1.5rem;
    }
    &:hover{
        border: 1px solid ${theme.colors.lightPink};
        background-color: transparent;
        color: ${theme.colors.lightPink};
    }
`;

export const SearchIcon = styled(Search)`
    width: 30px;
    color: ${theme.colors.lightGrey};
`;

export const CloseIcon = styled(Close)`
    cursor: pointer;
    width: 40px;
    color: ${theme.colors.lightGrey};
    &:hover{
        color: ${theme.colors.lightPink};
    }
`;

export const SpotifyLogo = styled(Spotify)`
    width: 80px;
    color: ${theme.spotify.darkGreen};
`;
