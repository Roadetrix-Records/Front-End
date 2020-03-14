import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

export const Container = styled.section`
    display: flex;
    ${theme.breakpoints.tablet}{
        flex-direction: column;
    }
`;

export const DNav = styled.nav`
    position: fixed;
    width: ${props => props.open ? '300px' : '80px'};
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.open ? 'flex-start' : 'center'};
    padding: ${props => props.open ? '20px' : '20px 0'};
    transition: width 500ms ease;
`;

export const MNav = styled.nav`
    position: fixed;
    width: 100%;
    height: ${props => props.open ? '300px': '80px'};
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: ${props => props.open ? 'flex-start' : 'center'};
    padding: ${props => props.open ? '20px 0' : '0'};
    transition: height 500ms ease;
`;

export const Hamburger = styled.div`
    cursor: pointer;
    margin-right: ${props => props.mobile ? '20px' : '0'};
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    display: ${props => props.open ? 'block' : 'none'};
    color: ${theme.colors.white};
    text-decoration: none;
    margin: 10px 0;
    text-align: center;
    font-size: 2rem;
    font-family: ${theme.font};
`;

export const Main = styled.main`
    margin-left: 80px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${theme.breakpoints.tablet}{
        margin-left: 0;
        margin-top: 80px;
    }
`;

export const Box = styled.div`
    width: 40%;
    max-width: 600px;
    min-width: 400px;
    height: 30%;
    margin: 0 50px;
    margin-top: 50px;
    border: 1px solid blue;
`;