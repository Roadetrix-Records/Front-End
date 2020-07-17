import React from 'react';
import { PlaylistCard, DeleteIcon, DragIcon } from './styles';

export default ({playlistImg}) => {
    return (
        <PlaylistCard>
            <div className='toolbar'>
                <DeleteIcon/>
                <DragIcon/>
            </div>
            <img alt='' src={playlistImg}/>
        </PlaylistCard>
    );
}