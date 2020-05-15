import styled from 'styled-components';
import theme from './theme';
import { User, LockAlt } from '@styled-icons/boxicons-solid'


// Login Styles
export const Login = styled.div`
    background: rgb(91,192,190);
    background: linear-gradient(90deg, rgba(91,192,190,1) 0%, rgba(77,168,191,1) 100%);
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .login-container{
        width: 500px;
        height: 400px;
        background-color: white;
        box-shadow: 0px 0px 35px -3px rgba(0,0,0,0.52);
        display: flex;
        align-items: center;
        flex-direction: column;
        h1{
            margin: 50px 0;
            font-family: ${theme.fonts.ubuntu};
            font-size: 2.5rem;
            color: ${theme.colors.blueGreen};
        }
        form{
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            .remember-container{
                margin: 10px;
                margin-left: 45px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                input{
                    cursor: pointer;
                }
                p{
                    font-size: 1.5rem;
                    font-family: ${theme.fonts.ubuntu};
                    margin-left: 5px;
                    color: ${theme.colors.lightGrey};
                }
            }
            .btn-container{
                width: 90%;
                display: flex;
                justify-content: flex-end;
                .login-btn{
                    width: 150px;
                    height: 40px;
                    background: rgb(91,192,190);
                    background: linear-gradient(90deg, rgba(91,192,190,1) 0%, rgba(77,168,191,1) 100%);
                    box-shadow: 0px 0px 13px -5px rgba(0,0,0,0.75);
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: ${theme.fonts.ubuntu};
                    font-size: 1.5rem;
                    cursor: pointer;
                    border-radius: 10px;
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
        }
    }
`;

export const UserInput = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
    width: 90%;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({focus}) => focus ? theme.colors.blueGreen : theme.colors.lightGrey};
    input{
        border: none;
        outline: none;
        width: 100%;
        margin-left: 10px;
        font-size: 1.7rem;
        height: 30px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
`;

export const PasswordInput = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 90%;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${({focus}) => focus ? theme.colors.blueGreen : theme.colors.lightGrey};
    input{
        border: none;
        outline: none;
        width: 100%;
        margin-left: 10px;
        font-size: 1.7rem;
        height: 30px;
    }
`;

export const Error = styled.p`
    font-family: ${theme.fonts.ubuntu};
    color: red;
    font-size: 1.5rem;
    margin-top: 20px;
`;

export const UserIcon = styled(User)`
    width: 20px;
    color: ${theme.colors.lightGrey};
`;

export const LockIcon = styled(LockAlt)`
    width: 20px;
    color: ${theme.colors.lightGrey};
`;