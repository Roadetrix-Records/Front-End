import React from 'react';
import { PlaylistsPreview } from './styles';
import PlaylistCard from './PlaylistCard';

import { sortableContainer, sortableElement } from 'react-sortable-hoc';

const SortableCardContainer = sortableContainer(({ children }) => <div className='draggable-wrapper'>{ children }</div>)

const SortableCard = sortableElement(({ playlistImg, key, handleDelete, id }) => {
    return <PlaylistCard 
                playlistImg={playlistImg} 
                key={key} 
                handleDelete={handleDelete} 
                id={id}
            />
})

export default ({ playlists, handleDelete, onSortEnd }) => {
    return (
        <PlaylistsPreview>
            <div className='title'>
                <h1>Playlist Preview - </h1>
                <p>Playlists will appear in the same order on the home page, drag and drop to change order.</p>
            </div>
            <SortableCardContainer axis='x' onSortEnd={onSortEnd} distance={1}>
                {playlists && playlists.map((playlist, i) => {
                    return <SortableCard
                        index={i}
                        playlistImg={playlist.img}
                        key={playlist.id}
                        handleDelete={handleDelete}
                        id={playlist.id}
                    />
                })}
            </SortableCardContainer>
        </PlaylistsPreview>
    )
}