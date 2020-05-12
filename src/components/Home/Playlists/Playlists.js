import React from 'react';
import { PlaylistContainer } from '../styles';
import playlistBg1 from '../../../assets/playlist-bg-1.svg';
import playlistBg2 from '../../../assets/playlist-bg-2.svg';

export default () => {
    return (
        <PlaylistContainer>
            <img src={playlistBg1} id='bg1' alt=''/>
            <img src={playlistBg2} id='bg2' alt=''/>
            <h1>Playlists</h1>

        </PlaylistContainer>
    )
}