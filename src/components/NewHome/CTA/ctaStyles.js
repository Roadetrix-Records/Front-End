import styled from 'styled-components';
import theme from '../../../newTheme';

import { ArrowForwardOutline } from '@styled-icons/evaicons-outline';

export const CTA = styled.section`
    width: ${theme.spacing.wrapper};
    max-width: 1100px;
    height: 600px;
    position: relative;
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 5;
    }
`;

export const Card = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.75);
    border-radius: 10px;
    background-color: ${theme.colors.neutral.white};
    .content {
        margin-top: 20%;
        line-height: 25px;
        .title {
            display: flex;
            align-items: center;
            transition: .5s ease;
            cursor: pointer;
            &:hover {
                margin-left: 10px;
                transition: .5s ease;
            }
        }
    }
`;

export const Bar = styled.div`
    background-color: ${theme.colors.primary.spotifyGreen};
    width: 80%;
    margin: 0 auto;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

export const ArrowIcon = styled(ArrowForwardOutline)`
    width: 30px;
    color: ${theme.colors.primary.spotifyGreen};
`;