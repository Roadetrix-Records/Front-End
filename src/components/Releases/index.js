import React, { useEffect, useState } from 'react';
// Component Imports
import Card from './Card';

// Dependency Imports
import axios from 'axios';

// Util Imports
import { BASE_URL } from '../../enviornment';

// Style Imports
import { Releases } from './styles';


export default () => {
    const [ releases, setReleases ] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/albums`)
        .then(res => {
            setReleases(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Releases>
            {/* Latest release goes here */}
            <h1>Releases</h1>
            <div className='bar'/>
            {releases &&  (
                <div className='releases-container'>
                    {releases.map(release => {
                        return <Card release={release} key={release.id}/>
                    })}
                </div>
            )}
        </Releases>
    )
}