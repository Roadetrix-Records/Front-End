import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../enviornment';
import { PlaylistContainer, AddIcon, AddForm, Error } from './styles';
import spotifyAuth from '../../utils/spotifyAuth';
import PlaylistsPreview from './PlaylistsPreview';

export default () => {
    const [ addPlaylist, setAddPlaylist ] = useState(true);
    const [ newPlaylist, setNewPlaylist ] = useState('');
    const [ error, setError ] = useState('');
    const [ playlistCount, setPlaylistCount ] = useState(0);

    const MAX_PLAYLISTS = 4;

    const handleAdd = () => {
        setAddPlaylist(!addPlaylist);
    }

    const handleChange = e => {
        setNewPlaylist(e.target.value);
    }

    const handleUpdate = e => {
        if (playlistCount === MAX_PLAYLISTS){
            setError('Cannot add anymore playlists, please remove an existing playlist.')
            return;
        }
        let id = playlistCount;

        const spotifyToken = window.localStorage.getItem('spotifyToken');

        // Extract the playlist id from the url
        let splitURL = newPlaylist.split('/')
        let playlistId = splitURL[splitURL.length - 1];

        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                'Authorization': 'Bearer ' + spotifyToken
            }
        })
        .then(res => {
            // Store the received playlist into the database
            axios.put(`${BASE_URL}/playlists`, {
                id,
                url: newPlaylist,
                playlistId,
                img: res.data.images[0].url,
                privateUrl: res.data.href
            })
            .then(() => {
                setError('');
                playlistCount ++;
            })
        })
        .catch(err => {
            if(err.response.status === 401){
                window.localStorage.removeItem(spotifyToken);
                window.location.href = spotifyAuth();
            }
            if(err.response.status === 404){
                console.log(err);
            }
        })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            setPlaylistCount(res.data.length)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <PlaylistContainer>
            <div className='add-playlist'>
                <div className='add-btn' onClick={handleAdd}>
                    <AddIcon/>
                    <p>Add Playlist</p>
                </div>
                <AddForm display={addPlaylist} error={error.length > 0}>
                    <input
                        value={newPlaylist}
                        onChange={handleChange}
                    />
                    <div className='update-btn' onClick={handleUpdate}>
                        <p>Add</p>
                    </div>
                </AddForm>
            </div>
            {error.length > 0 && (
                <div className='error-container'>
                    <Error display={addPlaylist}>{error}</Error>
                </div>
            )}
            <PlaylistsPreview/>
        </PlaylistContainer>
    );
}