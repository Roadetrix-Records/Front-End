import React from 'react';
import { PlaylistCard, DeleteIcon, DragIcon } from '../styles';

export default ({ id, playlistImg, handleDelete }) => {
    return (
        <PlaylistCard>
            <div className='toolbar'>
                <DeleteIcon onClick={() => handleDelete(id)}/>
                <DragIcon/>
            </div>
            <img alt='' src={playlistImg}/>
        </PlaylistCard>
    );
}