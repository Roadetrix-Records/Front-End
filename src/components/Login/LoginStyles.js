import styled from 'styled-components';
import { adminTheme } from '../../theme';


export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-top: 100px;
`;

export const Title = styled.h1`
    font-family: ${adminTheme.font};
    font-size: ${adminTheme.fontSizes.title};
    margin-bottom: 100px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

export const Label = styled.label`
    font-family: ${adminTheme.font};
    font-size: ${adminTheme.fontSizes.subheading};
    margin: 10px 0;
`;

export const Input = styled.input`
    font-family: ${adminTheme.font};
    font-size: ${adminTheme.fontSizes.text};
    margin: 10px 0;
    width: 300px;
    height: 30px;
    -webkit-appearance: none;
    border: 1px solid ${adminTheme.colors.black};
`;

export const Submit = styled.button`
    font-family: ${adminTheme.font};
    font-size: ${adminTheme.fontSizes.subheading};
    margin: 30px 0;
    width: 300px;
    cursor: pointer;
    padding: 10px 0;
    -webkit-appearance: none;
    background-color: ${adminTheme.colors.blue};
    color: ${adminTheme.colors.white};
    border: none;
`;

export const Error = styled.p`
    font-family: ${adminTheme.font};
    font-size: ${adminTheme.fontSizes.text};
    margin: 10px 0;
    color: ${adminTheme.colors.error};
`;