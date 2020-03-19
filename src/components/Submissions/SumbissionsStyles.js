import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.section`
    width: 700px;
    height: 400px;
    border-radius: 10px;
    margin: ${props => props.error ? '50px auto' : '100px auto'};
    background-color: ${theme.colors.darkGrey};
    -webkit-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    -moz-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Error Components
export const ErrorContainer = styled.div`
    width: 660px;
    margin: 50px auto;
    background-color: ${theme.colors.darkGrey};
    border-radius: 10px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    -moz-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
`;

export const Error = styled.p`
    color:${props => props.title ? theme.colors.darkPink : theme.colors.white};
    font-size: 2rem;
    font-family: ${theme.fonts.carter};
    margin: 5px 0;
`;

// Container Components
export const Top = styled.div`
    display: flex;
    margin-top: 50px;
`;

export const SubTop = styled.div`
    width: 45%;
    margin: 0 20px;
`;

export const Full = styled.div`
    width: 78%;
    margin-top: 20px;
`;

// Form Components
export const Label = styled.label`
    color: ${theme.colors.white};
    font-size: 2rem;
    font-family: ${theme.fonts.carter};
`;

export const Field = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    font-size: 1.3rem;
`;

export const Submit = styled.button`
    margin-top: 30px;
    font-size: 2rem;
    font-family: ${theme.fonts.carter};
    background-color: ${theme.colors.darkPink};
    border: none;
    border-radius: 10px;
    color: ${theme.colors.white};
    cursor: pointer;
    -webkit-appearance: none;
    padding: 10px;
    &:hover{
        transform: scale(1.05);
    }
`;