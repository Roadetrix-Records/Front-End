import React from 'react';
import { FeaturedCard } from '../styles';

export default ({ track }) => {
    return (
        <FeaturedCard>
            <img src={track.imgUrl}/>
            <div className='text-container'>
                <h3>{track.songTitle}</h3>
                <p className='album'>{track.albumName}</p>
            </div>
        </FeaturedCard>
    );
}