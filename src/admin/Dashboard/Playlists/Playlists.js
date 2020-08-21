import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';
import { PlaylistContainer, AddIcon, AddForm, Error } from '../styles';
import spotifyAuth from '../../../utils/spotifyAuth';
import PlaylistsPreview from './PlaylistsPreview';

import arrayMove from 'array-move';

export default () => {
    const [ playlists, setPlaylists ] = useState([]);
    const [ addPlaylist, setAddPlaylist ] = useState(false);
    const [ newPlaylist, setNewPlaylist ] = useState('');
    const [ error, setError ] = useState('');

    const MAX_PLAYLISTS = 4;
    const history = useHistory();

    const handleAdd = () => {
        setAddPlaylist(!addPlaylist);
    }

    const handleChange = e => {
        setNewPlaylist(e.target.value);
    }

    // Grab playlist data from spotify
    const handleUpdate = () => {
        if (playlists.length === MAX_PLAYLISTS){
            setError('Cannot add anymore playlists, please remove an existing playlist.')
            return;
        }

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
            setError('');
            setPlaylists([
                ...playlists, 
                {
                    id: playlists.length + 1,
                    url: newPlaylist,
                    playlistId,
                    img: res.data.images[0].url,
                    privateUrl: res.data.href
                }
            ])
            setNewPlaylist('');
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

    const handleDelete = id => {
        setPlaylists(playlists.filter(playlist => playlist.id !== id));
        // Post new playlists array to database
    }

    // Performs an immutable swap in the playlists array
    const movePlaylists = (oldIndex, newIndex) => {
        setPlaylists(p => arrayMove(p, oldIndex, newIndex));
    }

    // This function runs everytime a playlist has been dragged
    const onSortEnd = async ({ oldIndex, newIndex }) => {
        console.log(playlists)
        await movePlaylists(oldIndex, newIndex);
        console.log('after update', playlists)
        await postPlaylists();
    }

    const fetchPlaylists = () => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            console.log(res.data);
            setPlaylists(res.data.sort((a, b) => {
                return a.id - b.id
            }));
        })
        .catch(err => {
            console.log(err);
        })
    }

    const postPlaylists = () => {
        axios.post(`${BASE_URL}/playlists`, playlists, {
            headers: {
                Authorization: window.localStorage.getItem('adminToken')
            }
        })
        .catch(err => {
            if(err.response.status === 401){
                history.push('/admin');
            }
        })
    }

    // When the component render, fetch current playlists from database
    useEffect(() => {
        fetchPlaylists();
    }, [])

    return(
        <PlaylistContainer>
            <div className='add-playlist'>
                <div className='add-btn' onClick={handleAdd}>
                    <AddIcon/>
                    <p>Add Playlist</p>
                </div>
                <AddForm display={addPlaylist ? 1 : 0} error={error.length > 0}>
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
            <PlaylistsPreview playlists={playlists} handleDelete={handleDelete} onSortEnd={onSortEnd}/>
        </PlaylistContainer>
    );
}