import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';
import { ReleasePreview, HideOverlay, HideIcon } from '../styles';

export default ({ release, selectingFeatured, handleSelect, featuredId }) => {
    // if(featuredId){
    //     console.log(featuredId)
    //     console.log(release.albumId)
    // }
    const [ hidden, setHidden ] = useState(release.isHidden);

    const handleHidden = () => {
        if(featuredId !== release.albumId || !featuredId){
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
    }

    return (
        <ReleasePreview>
            <div className='img-container' onClick={() => {
                if(release.id !== featuredId){
                    if (selectingFeatured){
                        handleSelect(release.id);
                    } else {
                        handleHidden();
                    }
                }
            }}>
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