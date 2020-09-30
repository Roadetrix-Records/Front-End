import styled from 'styled-components';
import theme from '../../../newTheme';
import bg from '../../../assets/bg-blurred.png'

export const Header = styled.header`
    background-image: url(${bg});
    background-color: ${theme.colors.neutral.white};
    background-size: cover;
    width: 100%;
    height: 1000px;
`;