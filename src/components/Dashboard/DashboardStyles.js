import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.section`
    display: flex;
`;

export const Nav = styled.nav`
    width: 60px;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

export const Hamburger = styled.div`
    cursor: pointer;
`;

