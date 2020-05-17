import React, { useState, useEffect } from 'react';
import { PlaylistContainer } from '../styles';
import playlistBg1 from '../../../assets/playlist-bg-1.svg';
import playlistBg2 from '../../../assets/playlist-bg-2.svg';
import axios from 'axios';

export default () => {
    const [ playlists, setPlaylists ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/playlists')
        .then(res => {
            res.data.sort((a, b) => {
                return a.id - b.id;
            })
            console.log(res.data);
            setPlaylists(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <PlaylistContainer>
            <img src={playlistBg1} id='bg1' alt=''/>
            <img src={playlistBg2} id='bg2' alt=''/>
            <div className='content-container'>
                <h1>Playlists</h1>

            </div>
        </PlaylistContainer>
    )
}