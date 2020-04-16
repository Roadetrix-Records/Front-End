import React from 'react';
import spotifyAuth from '../../utils/spotifyAuth';
import axios from 'axios';


export default () => {
    const handleUpdate = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken');
        const admin = true;
        if(spotifyToken){
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
                console.log(err.response.status);
                if(err.response.status === 401){
                    window.localStorage.removeItem(spotifyToken);
                    window.location.href = spotifyAuth(admin);
                }
            })
        }else{
            window.location.href = spotifyAuth(admin);
        }
    }
    
    return (
        <div>
            <h1>dashboard</h1>
            <button onClick={handleUpdate}>Update Spotify</button>
        </div>
    );
}