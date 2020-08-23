import React from 'react';
import { ReleaseCard } from './styles';

export default ({ release, handleClick }) => {
    return (
        <ReleaseCard onClick={() => handleClick(release.albumId)}>
            <img src={release.albumImgUrl} alt={release.albumName}/>
            <div className='info-container'>
                <h2>{release.albumName}</h2>
            </div>
        </ReleaseCard>
    )
}