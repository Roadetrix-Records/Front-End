import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';
import { ReleasePreview, HideOverlay, HideIcon } from '../styles';

export default ({ release }) => {
    const [ hidden, setHidden ] = useState(release.isHidden);

    const handleHidden = () => {
        axios.put(`${BASE_URL}/spotify/set-hidden/${release.id}`, {
            isHidden: !hidden
        })
        .then(() => {
            setHidden(!hidden);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <ReleasePreview>
            <div className='img-container' onClick={handleHidden}>
                <div className='overlay'/>
                <HideOverlay display={hidden ? 1 : 0}>
                    <HideIcon/>
                </HideOverlay>
                <img alt={release.name} src={release.imgUrl}/>
            </div>
            <p>{release.name}</p>
        </ReleasePreview>
    );
}