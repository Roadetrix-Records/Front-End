import React from 'react';
import { Link } from 'react-router-dom';

export default ({release}) => {
    return (
        <Link to={`/releases/${release.id}`}>
            <div className='release-card'>
                <div className='img-container'>
                    <img src={release.imgUrl} alt={release.songTitle}/>
                    <div className='img-overlay'/>
                </div>
                <h3>{release.songTitle}</h3>
            </div>
        </Link>
    );
}