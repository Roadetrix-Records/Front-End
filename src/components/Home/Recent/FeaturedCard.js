import React from 'react';
import { FeaturedCard, SpotifyLogo } from '../styles';
import { Link } from 'react-router-dom';
import spotifyAuth from '../../../utils/spotifyAuth';

export default ({ release }) => {
    const handleSave = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken')
        if(spotifyToken){
            console.log('authenticated');
        }else{
            window.location.href = spotifyAuth();
        }
    }

    return (
        <FeaturedCard>
            <Link to={`/releases/${release.id}`}>
                <div className='img-container'>
                    <img src={release.imgUrl} alt={release.songTitle}/>
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
        </FeaturedCard>
    );
}