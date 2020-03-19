import styled from 'styled-components';
import { theme } from '../../theme';

export const Section = styled.section`
    width: 100%;
    height: 500px;
    background-color: ${theme.colors.black};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpotifyCard = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: ${theme.colors.darkGrey};
    margin: 0 20px;
    -webkit-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    -moz-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
`;