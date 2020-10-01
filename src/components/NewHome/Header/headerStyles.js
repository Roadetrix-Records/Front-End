import styled, {css} from 'styled-components';
import theme from '../../../newTheme';
import bg from '../../../assets/bg-blurred.png';
import angle from '../../../assets/bg-angle.png';

export const Header = styled.header`
    background-image: url(${angle}), linear-gradient(180deg, rgba(0,0,0,.19), rgba(0,0,0,.19)), url(${bg});
    background-size: cover;
    background-attachment: scroll,scroll,fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    .header-wrapper {
        margin: 100px auto;
        width: ${theme.spacing.wrapper};
        display: flex;
        .col-1 {
            width: 50%;
            margin-top: 300px;
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            h1 {
                font-family: ${theme.font.family};
                font-size: 60px;
                font-weight: regular;
            }
            h2 {
                font-family: ${theme.font.family};
                font-size: 25px;
                margin: 30px 0;
                font-weight: bold;
            }
            p {
                font-family: ${theme.font.family};
                font-size: 18px;
            }
            .btn-wrapper {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 360px;
                height: 35px;
            }
        }
        .col-2 {
            margin-top: 200px;
            width: 500px;
            align-self: center;
            flex: 0 0 50%;
            img {
                width: 500px;
            }
        }
        
    }
`;

export const Button = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid ${props => props.color === 'black' ? theme.colors.neutral.black : theme.colors.primary.spotifyGreen};
    color: ${props => props.color === 'black' ? theme.colors.neutral.black : theme.colors.primary.spotifyGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: 18px;
    transition: .5s ease;
    ${props => props.solid && css`
        background-color: ${props => props.color === 'black' ? theme.colors.neutral.black : theme.colors.primary.spotifyGreen};
        color: ${theme.colors.neutral.white};
    `}
    &:hover {
        background-color: ${props => props.color === 'black' ? theme.colors.neutral.black : theme.colors.primary.spotifyGreen};
        color: ${props => props.color === 'black' && theme.colors.neutral.white};
        transition: .5s ease;
        ${props => props.solid && css`
            background-color: ${props => props.color === 'black' ? theme.colors.neutral.blackLight : theme.colors.primary.lightGreen};
        `}
    }
`;