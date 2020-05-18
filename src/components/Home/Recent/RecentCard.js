import React from 'react';

// Dependency Imports
import { Link } from 'react-router-dom';

// Style Imports
import { RecentCard } from '../styles';

export default ({ release }) => {
    return (
        <RecentCard>
            <Link to={`/releases/${release.albumId}`}>
                <div className='img-container'>
                    <img src={release.albumImgUrl} alt={release.songTitle}/>
                    <div className='img-overlay'/>
                </div>
            </Link>
            <h3>{release.songTitle}</h3>
            <p>{release.albumName}</p>
        </RecentCard>
    );
}