import React from 'react';
import { RecentCard } from '../styles';

export default ({ track }) => {
    return (
        <RecentCard>
            <img src={track.imgUrl}/>
            <h3>{track.songTitle}</h3>
            <p>{track.albumName}</p>
        </RecentCard>
    );
}