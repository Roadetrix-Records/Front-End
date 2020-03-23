import styled from 'styled-components';
import { theme } from '../../theme';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 160px;
    background-color: ${theme.colors.darkGrey};
    border-bottom: 10px solid ${theme.colors.darkPink};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 100px;
`;

export const Title = styled.h1`
    color: ${theme.colors.lightPink};
    font-size: 5rem;
    font-family: ${theme.fonts.courgette};
    margin: 0 20px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.selected ? theme.colors.white : theme.colors.darkPink};
    font-family: ${theme.fonts.carter};
    font-size: 2rem;
    margin: 0 20px;
    text-decoration: none;
    &:hover{
        color: ${theme.colors.white};
        transition: color .55s ease;

    }
`;