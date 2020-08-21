import React, { useState, useEffect } from 'react';

// Component Imports
import FeaturedCard from './FeaturedCard';
import RecentCard from './RecentCard';

// Dependency Imports
import axios from 'axios';
import { Link } from 'react-router-dom';

// Util Imports
import { BASE_URL } from '../../../enviornment';

// Style Imports
import Arrow from '../../../assets/arrow.svg';
import { Recent } from '../styles';

export default () => {
    const [ featured, setFeatured ] = useState([])
    const [ latest, setLatest ] = useState([])

    //  This would be a good spot to add useMemo
    const fetchLatest = () => {
        axios.get(`${BASE_URL}/spotify/latest`)
        .then(res => {
            setLatest(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const fetchFeatured = () => {
        axios.get(`${BASE_URL}/spotify/featured`)
        .then(res => {
            console.log(res.data)
            setFeatured(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchLatest();
        fetchFeatured();
    }, [])

    return(
        <Recent>
            {latest.length > 0 && (
                <>
                    <FeaturedCard release={featured}/>
                    <div className='latest-container'>
                        <div className='see-all'>
                            <div className='header'>
                                <h2>Latest</h2>
                                <div className='spacer'/>
                                <h2>Releases</h2>
                            </div>
                            <div className='bar'/>
                            <Link to='/releases'>
                                <div className='link'>
                                    <p className='margin'>See</p>
                                    <p>all</p>
                                    <img src={Arrow} alt=''/>
                                </div>
                            </Link>
                        </div>
                        <div className='recent-releases'>
                            {latest && latest.map((release, index) => {
                                if(index > 0){
                                    return <RecentCard release={release} key={release.albumId} index={index}/>
                                }
                                return null
                            })}
                        </div>
                    </div>
                    
                </>
            )}
        </Recent>
    );
}