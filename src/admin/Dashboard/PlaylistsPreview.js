import React from 'react';
import { PlaylistsPreview } from './styles';
import PlaylistCard from './PlaylistCard';

export default ({ playlists, handleDelete }) => {
    return (
        <PlaylistsPreview>
            <div className='title'>
                <h1>Playlist Preview - </h1>
                <p>Playlists will appear in the same order on the home page, drag and drop to change order.</p>
            </div>
            <div className='draggable-wrapper'>
                {playlists && playlists.map(playlist => {
                    return <PlaylistCard 
                                playlistImg={playlist.img} 
                                key={playlist.id} 
                                handleDelete={handleDelete} 
                                id={playlist.id}
                            />
                })}
            </div>
        </PlaylistsPreview>
    )
}