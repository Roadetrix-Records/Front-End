import styled from 'styled-components';
import theme from '../../theme';

export const Submissions = styled.section`
    width: 100%;
    .title-container{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 6rem;
            font-family: ${theme.fonts.anton};
            letter-spacing: 2px;
        }
        img{
            width: 300px;
        }
    }
    section{
        display: flex;
        height: 500px;
        width: 100%;
        background-color: ${theme.colors.lightGrey};
        .container{
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            margin-top: 100px;
            width: 60%;
            max-width: 900px;
        }
        .text-container{
            h2{
                font-family: ${theme.fonts.anton};
                font-size: 3rem;
                color: ${theme.colors.white};
                letter-spacing: 2px;
            }
            p{
                font-family: ${theme.fonts.roboto};
                font-size: 1.8rem;
                color: ${theme.colors.white};
            }
            .first{
                margin: 20px 0;
                line-height: 25px;
                span{
                    color: ${theme.colors.lightPink};
                }
            }
            .second{
                line-height: 25px;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    .name{
        margin: 0;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        div{
            margin: 0;
            display: flex;
            flex-direction: column;
            width: 47%;
        }
    }
    div{
        margin: 10px 0;
    }
    .margin{
        display: flex;
        flex-direction: column;
    }
    label{
        font-family: ${theme.fonts.roboto};
        color: ${theme.colors.white};
        font-size: 2.3rem;
    }
    input{
        height: 30px;
        font-size: 1.5rem;
    }
    p{
        font-size: 2rem;
        font-family: ${theme.fonts.roboto};
        color: ${theme.colors.darkPink};
        margin-top: 10px;
    }
`;

export const Submit = styled.div`
    margin-top: 20px !important;
    width: 100%;
    height: 50px;
    background-color: ${props => props.submitting ? 'grey' : theme.colors.lightPink};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.roboto};
    color: ${theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.submitting ? 'grey' : theme.colors.darkPink};
        transition: background-color 1s ease;
    }
`;