import React from 'react';
import { CarouselContainer, Left, Right, Video, SpotifyCard } from './HomeStyles';

import mockFootage from '../../assets/mock-footage.mp4';

function Carousel(){
    return (
        <CarouselContainer>
            <Left/>
            <Right/>
            <Video loop autoPlay>
                <source src={mockFootage} type='video/mp4'/>
            </Video>
            <SpotifyCard/>
        </CarouselContainer>
    );
}

export default Carousel;