import styled from 'styled-components';
import { theme } from '../../theme';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-solid'

export const Section = styled.section`
    width: 100%;
    height: 500px;
    background-color: ${theme.colors.black};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpotifyCard = styled.div`
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: ${theme.colors.darkGrey};
    margin: 0 20px;
    -webkit-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    -moz-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    z-index: 10;
`;

export const CarouselContainer = styled.section`
    height: 600px;
    position: relative;
    overflow: hidden;
`;

export const Left = styled(ChevronLeft)`
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate(-50%, -50%);
    width: 50px;
    color: ${theme.colors.white};
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
    &:hover{
        opacity: 1.0;
        transition: opacity 1s ease;
    }
`;

export const Right = styled(ChevronRight)`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    width: 50px;
    color: ${theme.colors.white};
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
    &:hover{
        opacity: 1.0;
        transition: opacity 1s ease;
    }
`;

export const Video = styled.video`
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;