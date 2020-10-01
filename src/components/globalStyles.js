import styled, { css } from 'styled';
import theme from '../newTheme';

// TODO: Add support for white color
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

//TODO: Add Links