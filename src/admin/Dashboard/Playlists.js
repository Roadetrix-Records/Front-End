import React, { useState, useEffect } from 'react';
import { PlaylistContainer, SpotifyLogo } from './styles';
import PlaylistInput from './PlaylistInput';
import axios from 'axios';
import { BASE_URL } from '../../enviornment';

export default () => {
    const [ playlistUrls, setPlaylistUrls ] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/playlists`)
        .then(res => {
            res.data.sort((a, b) => {
                return a.id - b.id
            })
            console.log(res.data);
            setPlaylistUrls(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <PlaylistContainer>
            <div className='top'>
                <SpotifyLogo/>
                <div className='content'>
                    <h1>Playlists</h1>
                    <div className='bar'/>
                    <p>Copy playlist links from spotify</p>
                </div>
            </div>
            <div className='bottom'>
                {playlistUrls && (
                    <>
                        <PlaylistInput id={1} url={playlistUrls[0].url}/>
                        <PlaylistInput id={2} url={playlistUrls[1].url}/>
                        <PlaylistInput id={3} url={playlistUrls[2].url}/>
                        <PlaylistInput id={4} url={playlistUrls[3].url}/>
                    </>
                )}
            </div>
        </PlaylistContainer>
    );
}