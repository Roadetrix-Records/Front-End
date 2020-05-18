import React from 'react';

// Dependency Imports
import axios from 'axios';
import { Link } from 'react-router-dom';

// Util Imports
import spotifyAuth from '../../../utils/spotifyAuth';

// Style Imports
import { FeaturedCard, SpotifyLogo } from '../styles';

export default ({ release }) => {
    
    const handleSave = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken')
        if(spotifyToken){
            // Get track ids for featured album
            let idsQueryString = '';
            for(let i=0; i<release.tracks.length; i++){
                idsQueryString += release.tracks[i].trackId;
                if(i<release.tracks.length-1){
                    idsQueryString += ',';
                }
            }
            console.log(idsQueryString);
            axios.put(`https://api.spotify.com/v1/me/tracks?ids=${idsQueryString}`,
            {
                headers: {
                    Authorization: 'Bearer ' + spotifyToken
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                debugger;
                if(err.response.status === 401){
                    window.localStorage.removeItem(spotifyToken);
                    window.location.href = spotifyAuth();
                }
            })
        }else{
            window.location.href = spotifyAuth();
        }
    }

    return (
        <FeaturedCard>
            {release && (
                <>
                <Link to={`/releases/${release.albumId}`}>
                    <div className='img-container'>
                        <img src={release.albumImgUrl} alt={release.songTitle}/>
                        <div className='img-overlay'/>
                    </div>
                </Link> 
                <div className='text-container'>
                    <h3>{release.songTitle}</h3>
                    <p className='album'>{release.albumName}</p>
                    <div className='save-to-playlist' onClick={handleSave}>
                        <SpotifyLogo/>
                        <p>Save</p>
                    </div>
                </div>
                </>
            )}
        </FeaturedCard>
    );
}