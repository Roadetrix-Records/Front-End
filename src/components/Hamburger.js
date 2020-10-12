import React from 'react';
import styled from 'styled-components';
import theme from '../newTheme';

const HamburgerIcon = styled.div`
    cursor: pointer;
    div {
        width: 35px;
        height: 3px;
        background-color: ${theme.colors.neutral.white};
        margin: 9px 0;
    }
`;

export default () => {
    return (
        <HamburgerIcon>
            <div/>
            <div/>
            <div/>
        </HamburgerIcon>
    );
}