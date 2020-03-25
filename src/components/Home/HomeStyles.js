import styled from 'styled-components';
import { theme } from '../../theme';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-solid'

export const Section = styled.section`
    width: 100%;
    height: 800px;
    background: ${props => props.gradient ? 'linear-gradient(90deg, rgba(255,194,194,1) 0%, rgba(251,153,153,1) 100%)' : 'none'};
    background-color: ${props => props.gradient ? 'none' : theme.colors.black};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 0px 30px -10px rgba(0,0,0,0.75);
`;

export const CarouselContainer = styled.section`
    height: 600px;
    position: relative;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80%;
`;

export const Card = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background-color: rgba(50,50,50,0.8);
    margin: 0 20px;
    -webkit-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    -moz-box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
    box-shadow: 0px 0px 9px 1px rgba(255,194,194,1);
`;

export const DetailsWrapper = styled.div`
    border: 1px solid green;
    margin-left: 50px;
    width: 50%;
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