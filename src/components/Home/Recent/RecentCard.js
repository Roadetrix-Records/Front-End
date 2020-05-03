import React from 'react';
import { RecentCard } from '../styles';
import { Link } from 'react-router-dom';

export default ({ release }) => {
    // console.log(release)
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