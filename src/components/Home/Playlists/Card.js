import React from 'react';

export default ({playlist}) => {
    return (
        <div className='card'>
            <a href={playlist.url}>
                <img src={playlist.img} alt='Roadetrix Playlist'/>
            </a>
            <div className='follow-btn'>
                <p>Follow</p>
            </div>
        </div>
    );
}