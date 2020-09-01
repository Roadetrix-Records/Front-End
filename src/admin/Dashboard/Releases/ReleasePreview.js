import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';
import { ReleasePreview, HideOverlay, HideIcon } from '../styles';

export default ({ release, selectingFeatured, handleSelect, featuredId }) => {

    const [ hidden, setHidden ] = useState(release.isHidden);

    /**
     * handleHidden - handles changing the state of an album's visibility status.
     * If the track selected is a featured track, nothing happens.
     * To determine this, we check to see if featuredId is equal to the release id
     */
    const handleHidden = () => {
        if(featuredId !== release.albumId || !featuredId){
            axios.put(`${BASE_URL}/spotify/set-hidden/${release.albumId}`, {
                isHidden: !hidden
            })
            .then(() => {
                setHidden(!hidden);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <ReleasePreview>
            <div className='img-container' onClick={() => {
                if(release.albumId !== featuredId){
                    if (selectingFeatured){
                        handleSelect(release.albumId);
                    } else {
                        handleHidden();
                    }
                }
            }}>
                <div className='overlay'/>
                <HideOverlay display={hidden ? 1 : 0}>
                    <HideIcon/>
                </HideOverlay>
                    <img alt={release.albumName} src={release.albumImgUrl}/>
            </div>
            <p>{release.albumName}</p>
        </ReleasePreview>
    );
}