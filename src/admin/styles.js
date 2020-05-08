import styled from 'styled-components';
import theme from './theme';

export const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    h1 {
        font-size: 4rem;
        font-family: ${theme.fonts.roboto};
        margin-bottom: 20px;
        text-align: center;
    }
    p {
        margin-bottom: 30px;
        font-family: ${theme.fonts.roboto};
        font-size: 2rem;
        color: red;
    }
    .form-container {
        background-color: ${theme.colors.lightBlue};
        border-radius: 20px;
        width: 300px;
        display: flex;
        justify-content: center;
        padding: 60px 0;
        form {
            display: flex;
            flex-direction: column;
            color: ${theme.colors.white};
            font-family: ${theme.fonts.roboto};
            font-size: 2.5rem;
            width: 80%;
            label {
                margin-bottom: 20px;
            }
            input {
                height: 30px;
                width: 100%;
                margin-bottom: 20px;
                font-size: 2rem;
                padding-left: 2px;
            }
            .login-btn {
                margin-top: 20px;
                cursor: pointer;
                background-color: ${theme.colors.blueGreen};
                padding: 10px;
                display: flex;
                justify-content: center;
                border-radius: 10px;
            }
        }
    }
`;