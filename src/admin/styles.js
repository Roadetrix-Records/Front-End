import styled from 'styled-components';
import theme from './theme';
import { User, LockAlt } from '@styled-icons/boxicons-solid'

export const Login = styled.div`
    background: rgb(77,168,191);
    background: linear-gradient(90deg, rgba(77,168,191,1) 0%, rgba(91,192,190,1) 100%);
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            font-family: ${theme.fonts.ubuntu};
            font-size: 2rem;
            color: ${theme.colors.blueGreen};
        }
        form{
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
`;

export const UserInput = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 90%;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    input{
        border: none;
        outline: none;
        width: 100%;
    }
`;

export const PasswordInput = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 90%;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    input{
        border: none;
        outline: none;
        width: 100%;
    }
`;

export const UserIcon = styled(User)`
    width: 20px;
    color: ${theme.colors.lightGrey};
`;

export const LockIcon = styled(LockAlt)`
    width: 20px;
    color: ${theme.colors.lightGrey};
`;