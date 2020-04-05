import React from 'react';
import { Recent } from '../styles';
import FeaturedCard from './FeaturedCard';
import RecentCard from './RecentCard';
import Arrow from '../../../assets/arrow.svg';

const dummyFeatured = {
        songId: 1,
        songTitle: 'Outset',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b2736262995af53c2590a771e022'
    }

const dummyRecent = [
    {
        songId: 2,
        songTitle: 'Phantasm',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67706c0000da84927772ce54afacdc191bd9bf'
    },
    {
        songId: 3,
        songTitle: 'Rose Tinted',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67706c0000da84c72117606dd6c3f34178244a'
    },
    {
        songId: 4,
        songTitle: 'Paradise',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c0cacb0919d8d000dfeba41'
    }
]

export default () => {
    return(
        <Recent>
            <FeaturedCard track={dummyFeatured}/>
            <h2>Latest Releases</h2>
            <div className='recent-releases'>
                {dummyRecent.map(track => {
                    return <RecentCard track={track} key={track.songId}/>
                })}
                <div className='see-all'>
                    <p>See All Releases</p>
                    <img src={Arrow}/>
                </div>
            </div>
        </Recent>
    );
}