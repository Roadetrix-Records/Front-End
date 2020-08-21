import React from 'react';
import { ReleaseCard } from './styles';

export default ({ release, handleClick }) => {
    return (
        <ReleaseCard onClick={() => handleClick(release.id)}>
            <img src={release.imgUrl} alt={release.name}/>
            <div className='info-container'>
                <h2>{release.name}</h2>
            </div>
        </ReleaseCard>
    )
}