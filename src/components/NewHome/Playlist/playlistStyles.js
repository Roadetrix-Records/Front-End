import styled from 'styled-components';
import theme from '../../../newTheme';
import bg from '../../../assets/playlist-bg.png';

export const Playlist = styled.section`
    width: 100%;
    height: 500px;
    background-color: ${theme.colors.neutral.black};
    background-image: url(${bg});
    background-position: center;
    backgroun-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    .playlist-wrapper {
        width: ${theme.spacing.wrapper};
        max-width: ${theme.spacing.maxWidth};
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        img {
            position: absolute;
            width: 400px;
            height: 400px;
            right: 0;
            ${theme.breakpoints.desktop}{
                width: 300px;
                height: 300px;
            }
            ${theme.breakpoints.tablet}{
                margin: auto;
                left: 0;
                right: 0;
                top: 40px;
            }
        }
        ${theme.breakpoints.tablet}{
            align-items: center;
            justify-content: flex-end;
        }
    }
    ${theme.breakpoints.tablet}{
        height: 560px;
        padding-bottom: 40px;
    }
`;