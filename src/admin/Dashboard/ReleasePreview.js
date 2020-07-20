import React from 'react';
import { ReleasePreview } from './styles';

export default ({ release }) => {
    return (
        <ReleasePreview>
            <div className='img-container'>
                <div className='overlay'/>
                <img alt={release.name} src={release.imgUrl}/>
            </div>
            <p>{release.name}</p>
        </ReleasePreview>
    );
}