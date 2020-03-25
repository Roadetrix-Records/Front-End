import React, { useState, useEffect } from 'react';

import SpotifyCard from './SpotifyCard';
import SpotifyDetails from './SpotifyDetails';
import { CarouselContainer, Left, Right, Video, Wrapper } from './HomeStyles';

import mockFootage from '../../assets/mock-footage.mp4';

function Carousel(){
    const [ current, setCurrent ] = useState(0);

    const goLeft = () => {
        if(current === 0){
            setCurrent(2);
        }else{
            setCurrent(current - 1);
        }
    }

    const goRight = () => {
        if(current === 2){
            setCurrent(0);
        }else{
            setCurrent(current + 1);
        }
    }

    useEffect(() => {
        console.log(current);
    }, [current])

    return (
        <CarouselContainer>
            <Left onClick={goLeft}/>
            <Right onClick={goRight}/>
            <Video loop autoPlay>
                <source src={mockFootage} type='video/mp4'/>
            </Video>
            {current === 0 && (
                <Wrapper>
                    <SpotifyCard/>
                    <SpotifyDetails/>
                </Wrapper>
            )}
            {current === 1 && (
                <Wrapper>
                    <SpotifyCard/>
                    <SpotifyDetails/>
                </Wrapper>
            )}
            {current === 2 && (
                <Wrapper>
                    <SpotifyCard/>
                    <SpotifyDetails/>
                </Wrapper>
            )}
        </CarouselContainer>
    );
}

export default Carousel;