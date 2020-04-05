import React from 'react';
import { RecentCard } from '../styles';
import { Link } from 'react-router-dom';

export default ({ track }) => {
    return (
        <RecentCard>
            <Link to={`/releases/${track.id}`}>
                <img src={track.imgUrl}/>
            </Link>
            <h3>{track.songTitle}</h3>
            <p>{track.albumName}</p>
        </RecentCard>
    );
}