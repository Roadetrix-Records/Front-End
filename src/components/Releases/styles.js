import styled from 'styled-components';
import theme from '../../theme';

export const Releases = styled.section`
    width: 80%;
    margin: 0 auto;
    h1 {
        font-family: ${theme.fonts.roboto};
        font-size: 3rem;
        margin-bottom: 5px;
    }
    .bar {
        height: 1px;
        width: 100%;
        background-color: ${theme.colors.lightGrey};
        opacity: 0.2;
    }
    .releases-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        a {
            text-decoration: none;
            color: ${theme.colors.darkGrey};
        }
        .release-card {
            width: 300px;
            height: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            cursor: pointer;
            .img-container {
                position: relative;
                width: 100%;
                img {
                    width: 100%;
                }
                .img-overlay {
                    position: absolute;
                    background-color: ${theme.colors.darkGrey};
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    &:hover{
                        opacity: 0.2;
                        transition: opacity 0.5s ease;
                    }
                }
            }
            h3 {
                font-family: ${theme.fonts.anton};
                letter-spacing: 1px;
                font-size: 2rem;
                margin: auto 0;
            }
        }
    }
`;
