import React, { useState, useEffect } from 'react';
import { fetchReleases } from '../../../utils/fetchReleases';
import ReleasePreview from './ReleasePreview';
import { ReleaseContainer } from '../styles';
import axios from 'axios';
import { BASE_URL } from '../../../enviornment';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


export default () => {
    const classes = useStyles();

    const [ updated, setUpdated ] = useState(false);
    const [ releases, setReleases ] = useState([]);
    const [ featuredRelease, setFeaturedRelease ] = useState(null);
    const [ lastFetch, setLastFetch ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ selectingFeatured, setSelectingFeatured ] = useState(false);
    const [ updatedFeatured, setUpdatedFeatured ] = useState(false);
    
    const handleUpdate = async () => {
        setLoading(true);
        const update = await fetchReleases();
        setUpdated(update);
        setLoading(false);
    }

    const handleSelectFeatured = () => {
        setSelectingFeatured(!selectingFeatured);
    }

    const handleSelect = (id) => {
        setLoading(true);
        setSelectingFeatured(false);
        axios.put(`${BASE_URL}/spotify/set-featured/${id}`)
        .then(() => {
            setLoading(false);
            setUpdatedFeatured(!updatedFeatured);
        })
        .catch(err => {
            console.log(err);
        })
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

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/admin-featured`)
        .then(res => {
            console.log('Inside fetch', res.data)
            setFeaturedRelease(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [ updatedFeatured ])

    return (
        <ReleaseContainer>
            {loading && (
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
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
                <div className='set-featured-btn' onClick={handleSelectFeatured}>
                    Select Featured Release
                </div>
                {featuredRelease && (
                    <ReleasePreview 
                        key={`featured-${featuredRelease.id}`} 
                        release={featuredRelease} 
                        featuredId={featuredRelease && featuredRelease.id}
                    />
                )}
            </div>
            <div className='preview-releases'>
                <div className='preview-header'>
                    <h1>Preview Releases</h1>
                    {!selectingFeatured && (
                        <p>Click on a release to toggle the visibility status for the users.</p>
                    )}
                </div>
                {selectingFeatured && (
                    <div className='selecting-featured'>
                        <p>Select a release from below to set as the featured release.</p>
                    </div>
                )}
                <div className='release-container'>
                    {releases && releases.map(release => {
                        return <ReleasePreview 
                                    key={release.id} 
                                    release={release} 
                                    selectingFeatured={selectingFeatured} 
                                    handleSelect={handleSelect}
                                    featuredId={featuredRelease && featuredRelease.id}
                                />
                    })}
                </div>
            </div>
        </ReleaseContainer>
    );
}