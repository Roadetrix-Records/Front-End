import React from 'react';
import { PlaylistContainer, SpotifyLogo } from './styles';
import PlaylistInput from './PlaylistInput';

export default () => {
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
                <PlaylistInput/>
                <PlaylistInput/>
                <PlaylistInput/>
                <PlaylistInput/>
            </div>
        </PlaylistContainer>
    );
}