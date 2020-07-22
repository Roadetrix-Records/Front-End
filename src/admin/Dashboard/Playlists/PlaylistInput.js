import React, { useState, useEffect } from 'react';
import spotifyAuth from '../../../utils/spotifyAuth';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';
import { PlaylistInput } from '../styles';

export default (props) => {
    const [ link, setLink ] = useState('');
    const [ error, setError ] = useState(undefined);
    const [ playlistImage, setPlaylistImage ] = useState(null);

    const handleChange = e => {
        setLink(e.target.value);
    }

    // TODO: Validate Playlist URL
    const handleUpdate = e => {
        console.log(e.target)
        let id = e.target.id;

        const spotifyToken = window.localStorage.getItem('spotifyToken');

        let parts = link.split('/');
        let playlistId = parts[parts.length - 1];

        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                'Authorization': 'Bearer ' + spotifyToken
            }
        })
        .then(res => {
            console.log(res);
            axios.put(`${BASE_URL}/playlists`, {
                id,
                url: link,
                playlistId,
                img: res.data.images[0].url,
                privateUrl: res.data.href
            })
            .then(res => {
                console.log(res);
            })
        })
        .catch(err => {
            if(err.response.status === 401){
                window.localStorage.removeItem(spotifyToken);
                window.location.href = spotifyAuth();
            }
            if(err.response.status === 404){

            }
        })
    }
    
    useEffect(() => {
        setLink(props.playlist.url);
        setPlaylistImage(props.playlist.img)
    }, [])

    return (
        <PlaylistInput>
            {playlistImage && (
                    <img src={playlistImage}/>
            )}
            <form>
                <input
                    name={`link${props.id}`}
                    type='text'
                    onChange={handleChange}
                    value={link}
                />
                <div onClick={handleUpdate} className='update-btn' id={props.id}>
                    <p id={props.id}>Update</p>
                </div>
            </form>
        </PlaylistInput>
        
    );
}