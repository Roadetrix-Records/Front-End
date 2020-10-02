import styled, {css} from 'styled-components';
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
            }
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
        }
    }
`;
