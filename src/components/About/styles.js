import styled from 'styled-components';
import theme from '../../theme';

export const About = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    .top{
        position: relative;
        height: 50vh;
        background-color: ${theme.colors.black};
        display: flex;
        flex-direction: column;
        align-items: center;
        .texture{
            width: 100%;
            position: absolute;
            bottom: 0;
        }
        .meet{
            margin-top: 50px;
            width: 800px;
            height: 150px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            z-index: 999;
        }
    }
    .mission{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 220px;
        background-color: ${theme.colors.white};
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h3{
        font-size: 4rem;
        color: ${theme.colors.lightPink};
        font-family: ${theme.fonts.anton};
        text-align: center;
    }
    .dark-text{
        font-size: 1.5rem;
        color: ${theme.colors.black};
        font-family: ${theme.fonts.ubuntu};
        text-align: center;
        line-height: 22px;
    }
    .light-text{
        font-size: 1.5rem;
        color: ${theme.colors.white};
        font-family: ${theme.fonts.ubuntu};
        text-align: center;
        line-height: 22px;
    }
`;