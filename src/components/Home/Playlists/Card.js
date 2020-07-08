import React from 'react';
import { Link } from 'react-router-dom';

export default ({playlist}) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <a href={playlist.url}>
                    <img src={playlist.img} alt='Roadetrix Playlist'/>
                    <div className='img-overlay'/>
                </a>
            </div>
            <a href={playlist.url}>
                <div className='details-btn'>
                    <p>View details</p>
                </div>
            </a>
            <div className='follow-btn'>
                <p>Follow</p>
            </div>
        </div>
    );
}