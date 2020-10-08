import styled, { css } from 'styled-components';
import theme from '../newTheme';

export const H1 = styled.h1`
    font-family: ${theme.font.family};
    font-size: 50px;
    color: ${theme.colors.neutral.black};
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.color === 'green' && css`
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'white' && css`
        color: ${theme.colors.neutral.white};
    `}
    ${theme.breakpoints.smTablet}{
        font-size: 40px;
    }
`;

export const H2 = styled.h2`
    font-family: ${theme.font.family};
    font-size: 40px;
    color: ${theme.colors.neutral.black};
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.color === 'green' && css`
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'white' && css`
        color: ${theme.colors.neutral.white};
    `}
    ${theme.breakpoints.smTablet}{
        font-size: 25px;
    }
`;

export const H3 = styled.h3`
    font-family: ${theme.font.family};
    font-size: 25px;
    color: ${theme.colors.neutral.black};
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.color === 'green' && css`
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'white' && css`
        color: ${theme.colors.neutral.white};
    `}
    ${theme.breakpoints.smTablet}{
        font-size: 20px;
    }
`;

export const H4 = styled.h4`
    font-family: ${theme.font.family};
    font-size: 20px;
    color: ${theme.colors.neutral.black};
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.color === 'green' && css`
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'white' && css`
        color: ${theme.colors.neutral.white};
    `}
`;

export const Text = styled.p`
    font-family: ${theme.font.family};
    font-size: 18px;
    color: ${theme.colors.neutral.black};
    ${props => props.bold && css`
        font-weight: bold;
    `}
    ${props => props.color === 'green' && css`
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'white' && css`
        color: ${theme.colors.neutral.white};
    `}
`;

export const SolidButton = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.font.family};
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    ${props => props.color === 'green' && css`
        border: 1px solid ${theme.colors.primary.spotifyGreen};
        background-color: ${theme.colors.primary.spotifyGreen};
        color: ${theme.colors.neutral.white};
    `}
    transition: .5s ease;
    &:hover {
        ${props => props.color === 'green' && css`
            border: 1px solid ${theme.colors.primary.lightGreen};
            background-color: ${theme.colors.primary.lightGreen};
            color: ${theme.colors.neutral.white};
            transition: .5s ease;
        `}
    }
    ${theme.breakpoints.smTablet}{
        width: calc(${props => props.width} - 20px);
        height: calc(${props => props.height} - 5px);
        font-size: 16px;
    }
`;

export const Button = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.font.family};
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    ${props => props.color === 'green' && css`
        border: 1px solid ${theme.colors.primary.spotifyGreen};
        color: ${theme.colors.primary.spotifyGreen};
    `}
    ${props => props.color === 'black' && css`
        border: 1px solid ${theme.colors.neutral.black};
        color: ${theme.colors.neutral.black};
    `}
    transition: .5s ease;
    &:hover {
        ${props => props.color === 'green' && css`
            border: 1px solid ${theme.colors.primary.spotifyGreen};
            background-color: ${theme.colors.primary.spotifyGreen};
            color: ${theme.colors.neutral.white};
        `}
        ${props => props.color === 'black' && css`
            border: 1px solid ${theme.colors.neutral.black};
            background-color: ${theme.colors.neutral.black};
            color: ${theme.colors.neutral.white};
        `}
        transition: .5s ease;
    }
    ${theme.breakpoints.smTablet}{
        width: calc(${props => props.width} - 20px);
        height: calc(${props => props.height} - 5px);
        font-size: 16px;
    }
`;

