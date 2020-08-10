import styled from 'styled-components';
import theme from '../../theme';

export const Releases = styled.section`
    
`;

export const Featured = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ImgContainer = styled.div`
    ${props => props.img && `
        background-image: url(${props.img})
    `};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    margin: 5px 0;
    overflow: hidden;
    position: absolute;
`;

export const FeaturedInfo = styled.section`
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 100%;
        margin-right: 10px;
    }
    .info{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        h1{
            font-family: ${theme.fonts.anton};
            font-size: 3.5rem;
            color: ${theme.colors.white};
        }
        p{
            font-family: ${theme.fonts.ubuntu};
            font-size: 2rem;
            color: ${theme.colors.lightPink};
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.white};
    margin: 10px 0;
`;

export const Button = styled.div`

`;
