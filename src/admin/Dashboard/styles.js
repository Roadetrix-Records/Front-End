import styled from 'styled-components';
import theme from '../theme';
import { Spotify } from '@styled-icons/boxicons-logos'

// Dashboard General Styles
export const Dashboard = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: -1;
    #textureOne{
        position: absolute;
        left: -100px;
        top: -100px;
    }
    #textureTwo{
        position: absolute;
        width: 1000px;
        bottom: -500px;
    }
    #textureThree{
        position: absolute;
        right: -400px;
        top: -250px;
        width: 1200px;
    }
`;

export const ReleaseContainer = styled.div`
    width: 400px;
    height: 400px;
    z-index: 1;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    position: absolute;
    background-color: white;
    display: flex;
    align-items: flex-start;
    .content{
        display: flex;
        flex-direction: column;
    }
`;

export const SpotifyLogo = styled(Spotify)`
    color: ${theme.colors.black};
    width: 80px;
`;