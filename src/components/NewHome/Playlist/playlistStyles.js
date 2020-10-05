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
    }
`;