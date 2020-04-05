import React from 'react';
import { FeaturedCard } from '../styles';
import { Link } from 'react-router-dom';

export default ({ track }) => {
    return (
        <FeaturedCard>
            <Link to={`/releases/${track.id}`}>
                <img src={track.imgUrl}/>
            </Link> 
            <div className='text-container'>
                <h3>{track.songTitle}</h3>
                <p className='album'>{track.albumName}</p>
            </div>
        </FeaturedCard>
    );
}