import React from 'react';
import { Playlist } from './playlistStyles';
import { H2, Text, SolidButton } from '../../globalStyles';
import playlists from '../../../assets/playlists.png';

export default () => {
    return (
        <Playlist>
            <div className='playlist-wrapper'>
                <H2 color='green' bold={true}>Our Playlists</H2>
                <div style={{ margin: '30px 0' }}>
                    <Text color='white'>With 20,000+ followers across our playlists,</Text>
                    <Text color='white'>we can generate streams for your music.</Text>
                </div>
                <SolidButton 
                    width='150px' 
                    height='40px' 
                    color='green'
                >View Playlists</SolidButton>
                <img src={playlists} alt='Playlists'/>
            </div>
        </Playlist>
    );
}