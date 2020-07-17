import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../enviornment';
import { PlaylistsPreview } from './styles';
import PlaylistCard from './PlaylistCard';

export default () => {
    const [ playlists, setPlaylists ] = useState([]);
    // Fetch the current playlists stored in the roadetrix database
    useEffect(() => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            res.data.sort((a, b) => {
                return a.id - b.id
            })
            setPlaylists(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <PlaylistsPreview>
            <div className='title'>
                <h1>Playlist Preview - </h1>
                <p>Playlists will appear in the same order on the home page, drag and drop to change order.</p>
            </div>
            <div className='draggable-wrapper'>
                {playlists && playlists.map(playlist => {
                    return <PlaylistCard playlistImg={playlist.img} key={playlist.id}/>
                })}
            </div>
        </PlaylistsPreview>
    )
}