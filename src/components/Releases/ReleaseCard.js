import React from 'react';
import { ReleaseCard } from './styles';

export default ({ release }) => {
    return (
        <ReleaseCard>
            <img src={release.imgUrl}/>
            <div className='info-container'>
                <h2>{release.name}</h2>
            </div>
        </ReleaseCard>
    )
}