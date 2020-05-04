import React from 'react';
import { Link } from 'react-router-dom';

export default ({release}) => {
    return (
        <Link to={`/releases/${release.id}`}>
            <div className='release-card'>
                <div className='img-container'>
                    <img src={release.imgUrl} alt={release.name}/>
                    <div className='img-overlay'/>
                </div>
                <h3>{release.name}</h3>
            </div>
        </Link>
    );
}