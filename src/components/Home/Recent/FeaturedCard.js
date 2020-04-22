import React, { useEffect } from 'react';
import { FeaturedCard, SpotifyLogo } from '../styles';
import { Link } from 'react-router-dom';
import spotifyAuth from '../../../utils/spotifyAuth';
import axios from 'axios';

// useEffect(() => {
    // Get the most recent release's image, name, album, and spotify track link
    // If album => no track name to display
// }, [])

export default ({ release }) => {
    const handleSave = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken')
        if(spotifyToken){
            console.log('authenticated');
            const artist_id = '7Md5xGlvby3sPI2NLkbYlv';
            axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`,
            {
                headers: {
                    'Authorization': 'Bearer ' + spotifyToken
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
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