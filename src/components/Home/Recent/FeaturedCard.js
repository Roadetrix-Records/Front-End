import React from 'react';
import { FeaturedCard } from '../styles';
import { Link } from 'react-router-dom';

export default ({ release }) => {
    return (
        <FeaturedCard>
            <Link to={`/releases/${release.id}`}>
                <div className='img-container'>
                    <img src={release.imgUrl} alt={release.songTitle}/>
                    <div className='img-overlay'/>
                </div>
            </Link> 
            <div className='text-container'>
                <h3>{release.songTitle}</h3>
                <p className='album'>{release.albumName}</p>
            </div>
        </FeaturedCard>
    );
}