import styled from 'styled-components';
import theme from '../../../newTheme';

import bg from '../../../assets/cta-bg-blurred.png';

import { ArrowForwardOutline } from '@styled-icons/evaicons-outline';

export const CTA = styled.section`
    width: 100%;
    height: 600px;
    background-image: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    .wrapper {
        margin: 0 auto;
        width: ${theme.spacing.wrapper};
        max-width: 1100px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${theme.breakpoints.tablet}{
            height: 90%;
            flex-direction: column;
        }
    }
    ${theme.breakpoints.tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Card = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.75);
    border-radius: 10px;
    background-color: ${theme.colors.neutral.white};
    .content {
        line-height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 40px;
        line-height: 30px;
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
        ${theme.breakpoints.phone}{
            align-items: center;
        }
    }
    ${theme.breakpoints.tablet}{
        width: 100%;
        min-height: 230px;
    }
`;

// export const Bar = styled.div`
//     background-color: ${theme.colors.primary.spotifyGreen};
//     width: 80%;
//     margin: 0 auto;
//     height: 5px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1;
//     ${theme.breakpoints.tablet}{
//         width: 5px;
//         height: 80%;
//     }
// `;

export const ArrowIcon = styled(ArrowForwardOutline)`
    width: 30px;
    color: ${theme.colors.primary.spotifyGreen};
    ${theme.breakpoints.phone}{
        display: none;
    }
`;