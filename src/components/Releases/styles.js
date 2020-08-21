import styled from 'styled-components';
import theme from '../../theme';
import { Search } from '@styled-icons/boxicons-regular/';

export const Releases = styled.section`
    
`;

export const Featured = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    background-color: ${props => props.color === 'white' ? theme.colors.white : theme.colors.lightGrey};
    margin: 10px 0;
`;

export const SubHeader = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    height: 50px;
    .search-bar-wrapper{
        display: flex;
        justify-content: flex-end;
        .search-bar{
            display: flex;
            align-items: center;
            input{
                width: 300px;
                height: 30px;
                border: 1px solid ${theme.colors.lightGrey};
                border-radius: 20px;
                outline: none;
                padding-left: 10px;
                font-size: 1.5rem;
                font-family: ${theme.fonts.ubuntu};
                &:focus{
                    border: 1px solid ${theme.colors.lightPink};
                }
            }
        }
    }
`;

export const ReleaseWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ReleaseContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ReleaseCard = styled.div`
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    margin: 10px;
    width: 250px;
    img{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .info-container{
        display: flex;
        justify-content: space-between;
        margin: 10px;
        h2{
            font-size: 1.5rem;
            font-family: ${theme.fonts.ubuntu};
            color: ${theme.colors.lightGrey};
        }
    }
    &:hover{
        transform: scale(1.01);
    }
`;

export const Button = styled.div`

`;

export const SearchIcon = styled(Search)`
    width: 30px;
    color: ${theme.colors.lightGrey};
`;
