import React, { useState, useEffect } from 'react';
import { fetchReleases } from '../../../utils/fetchReleases';
import ReleasePreview from './ReleasePreview';
import { ReleaseContainer } from '../styles';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';

export default () => {
    const [ updated, setUpdated ] = useState(false);
    const [ releases, setReleases ] = useState([]);
    const [ featuredRelease, setFeaturedRelease ] = useState(null);
    const [ lastFetch, setLastFetch ] = useState('');
    
    const handleUpdate = async () => {
        const update = await fetchReleases();
        setUpdated(update);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/albums`)
        .then(res => {
            setReleases(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        axios.get(`${BASE_URL}/spotify/last-fetch`)
        .then(res => {
            setLastFetch(res.data.date);
        })
        .catch(err => {
            console.log(err);
        })
    }, [ updated ])

    return (
        <ReleaseContainer>
            <div className='fetch-container'>
                <h1>Fetch Releases</h1>
                <p>To fetch all releases from spotify, click the button below.</p>
                <p className='sub'>If you are re-directed to login with spotify, click the button below again after logging in.</p>
                <p className='sub'>Last fetch: {lastFetch}</p>
                <div className='fetch-btn' onClick={handleUpdate}>
                    Fetch Releases
                </div>
            </div>
            <div className='featured-release'>
                <h1>Featured Release</h1>
                <p>The featured release is the first release a user will see on the home page or releases page.</p>
                {!featuredRelease && (
                    <div className='set-featured-btn'>
                        Select Featured Release
                    </div>
                )}
                {featuredRelease && (
                    <div>
                    </div>
                )}
            </div>
            <div className='preview-releases'>
                <div className='preview-header'>
                    <h1>Preview Releases</h1>
                    <p>Click on a release to toggle the visibility status for the users.</p>
                </div>
                <div className='release-container'>
                    {releases && releases.map(release => {
                        return <ReleasePreview key={release.id} release={release}/>
                    })}
                </div>
            </div>
        </ReleaseContainer>
    );
}