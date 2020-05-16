import styled from 'styled-components';
import theme from '../theme';
import { Spotify } from '@styled-icons/boxicons-logos'

// Dashboard General Styles
export const Dashboard = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    #textureOne{
        position: absolute;
        left: -100px;
        top: -100px;
        z-index: -1;
    }
    #textureTwo{
        position: absolute;
        width: 1000px;
        bottom: -500px;
        z-index: -1;
    }
    #textureThree{
        position: absolute;
        right: -400px;
        top: -250px;
        width: 1200px;
        z-index: -1;
    }
    .row{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100vh;
        z-index: 1;
        position: absolute;
        .col{
            width: 30%;
            height: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`;

export const ToolBar = styled.div`
    width: 100%;
    height: 10%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
    z-index: 2;
    .logout-btn{
        width: 130px;
        height: 50px;
        background: rgb(91,192,190);
        background: linear-gradient(0deg, rgba(91,192,190,1) 0%, rgba(77,168,191,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        color: ${theme.colors.white};
        p{
            font-family: ${theme.fonts.ubuntu};
            color: inherit;
            font-size: 2rem;
        }
        &:hover{
            border: 1px solid ${theme.colors.blueGreen};
            background: rgba(255, 255, 255, 0);
            width: 128px;
            height: 48px;
            color: ${theme.colors.blueGreen};
        }
    }
`;

export const ReleaseContainer = styled.div`
    width: 100%;
    height: 40%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
    display: flex;
    align-items: flex-start;
    .content{
        display: flex;
        flex-direction: column;
    }
`;

export const PlaylistContainer = styled.div`
    width: 100%;
    height: 40%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

export const Submissions = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

export const Contact = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

export const SpotifyLogo = styled(Spotify)`
    color: ${theme.colors.black};
    width: 80px;
`;