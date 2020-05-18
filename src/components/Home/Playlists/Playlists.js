import React, { useState, useEffect } from 'react';

// Component Imports
import Card from './Card';

// Dependency Imports
import axios from 'axios';

// Util Imports
import { BASE_URL } from '../../../enviornment';

// Style Imports
import playlistBg1 from '../../../assets/playlist-bg-1.svg';
import playlistBg2 from '../../../assets/playlist-bg-2.svg';
import { PlaylistContainer } from '../styles';

export default () => {
    const [ playlists, setPlaylists ] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            res.data.sort((a, b) => {
                return a.id - b.id;
            })
            setPlaylists(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <PlaylistContainer>
            <div className='content-container'>
                <h1>Playlists</h1>
                <div className='playlists'>
                    {playlists ? (
                        playlists.map(playlist => {
                            return <Card playlist={playlist} key={playlist.id}/>
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <img src={playlistBg1} id='bg1' alt=''/>
            <img src={playlistBg2} id='bg2' alt=''/>
        </PlaylistContainer>
    )
}