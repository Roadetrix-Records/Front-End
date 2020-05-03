import React, { useState, useEffect } from 'react';
import { Recent } from '../styles';
import FeaturedCard from './FeaturedCard';
import RecentCard from './RecentCard';
import Arrow from '../../../assets/arrow.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default () => {
    const [ latest, setLatest ] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/spotify/latest-4')
        .then(res => {
            setLatest(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <Recent>
            {latest && (
                <FeaturedCard release={latest[0]}/>
            )}
            <h2>Latest Releases</h2>
            {latest && (
                <div className='recent-releases'>
                    {latest.map((release, index) => {
                        if(index > 0){
                            return <RecentCard release={release} key={release.albumId}/>
                        }
                    })}
                    <div className='see-all'>
                        <p>See All Releases</p>
                        <Link to='/releases'>
                            <img src={Arrow} alt=''/>
                        </Link>
                    </div>
                </div>
            )}
            
        </Recent>
    );
}