import React, { useEffect, useState } from 'react';
import { Releases } from './styles';
import Card from './Card';
import axios from 'axios';

export default () => {
    const [ releases, setReleases ] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/spotify/albums')
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