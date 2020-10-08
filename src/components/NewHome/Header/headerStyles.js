import styled from 'styled-components';
import theme from '../../../newTheme';
import bg from '../../../assets/bg-blurred.png';


export const Header = styled.header`
    width: 100vw;
    .header-row-top {
        width: 100%;
        height: 400px;
        background-image: url(${bg});
        background-attachment: fixed;
        background-size: cover;
        background-position: 100% 100%;
        .img-wrapper{
            width: 80%;
            height: 100%;
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            img {
                width: 500px;
                position: absolute;
                right: 0;
                bottom: -140px;
                ${theme.breakpoints.lgDesktop}{
                    margin: auto;
                    left: 0;
                    right: 0;
                }
                ${theme.breakpoints.smTablet}{
                    width: 300px;
                    bottom: -100px;
                }
            }
        }
        ${theme.breakpoints.smTablet}{
            height: 250px;
        }
    }
    .header-row-bottom {
        width: 80%;
        height: 400px;
        max-width: 1400px;
        margin: 0 auto;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        .btn-wrapper {
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            width: 350px;
            ${theme.breakpoints.smTablet}{
                width: 320px;
            }
        }
        ${theme.breakpoints.lgDesktop}{
            height: 600px;
            align-items: center;
        }
        ${theme.breakpoints.smTablet}{
            padding-top: 100px;
            height: 250px;
        }
    }
`;
