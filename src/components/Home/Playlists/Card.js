import React from 'react';

export default ({playlist}) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <a href={playlist.url}>
                    <img src={playlist.img} alt='Roadetrix Playlist'/>
                    <div className='img-overlay'/>
                </a>
            </div>
            <div className='follow-btn'>
                <p>Follow</p>
            </div>
        </div>
    );
}