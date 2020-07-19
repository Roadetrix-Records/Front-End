import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../enviornment';
import { PlaylistContainer, AddIcon, AddForm, Error } from './styles';
import spotifyAuth from '../../utils/spotifyAuth';
import PlaylistsPreview from './PlaylistsPreview';

import arrayMove from 'array-move';

export default () => {
    const [ playlists, setPlaylists ] = useState([]);
    const [ addPlaylist, setAddPlaylist ] = useState(false);
    const [ newPlaylist, setNewPlaylist ] = useState('');
    const [ error, setError ] = useState('');
    const [ playlistCount, setPlaylistCount ] = useState(0);

    const [ dragged, setDragged ] = useState(false);

    const MAX_PLAYLISTS = 4;
    const history = useHistory();

    const handleAdd = () => {
        setAddPlaylist(!addPlaylist);
    }

    const handleChange = e => {
        setNewPlaylist(e.target.value);
    }

    // Grab playlist data from spotify
    const handleUpdate = e => {
        if (playlistCount === MAX_PLAYLISTS){
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
            setPlaylistCount(playlistCount + 1);
            setPlaylists([...playlists, {
                id: playlistCount + 1,
                url: newPlaylist,
                playlistId,
                img: res.data.images[0].url,
                privateUrl: res.data.href
            }])
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
        setPlaylistCount(playlistCount - 1);
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setPlaylists(arrayMove(playlists, oldIndex, newIndex));
        setDragged(!dragged);
    }

    // When the component render, fetch current playlists from database
    useEffect(() => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            setPlaylists(res.data.sort((a, b) => {
                return a.id - b.id
            }));
            setPlaylistCount(res.data.length);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.post(`${BASE_URL}/playlists`, playlists, {
            headers: {
                Authorization: window.localStorage.getItem('adminToken')
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            if(err.response.status === 401){
                history.push('/admin');
            }
        })
    }, [ playlists ]);

    // After a card has been dragged, update all the ids (they must stay in order)
    useEffect(() => {
        setPlaylists(playlists.map((playlist, i) => {
            return {
                ...playlist,
                id: i + 1
            }
        }));
    }, [ dragged ]);

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
            <PlaylistsPreview playlists={playlists} handleDelete={handleDelete} onSortEnd={onSortEnd}/>
        </PlaylistContainer>
    );
}