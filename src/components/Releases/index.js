import React from 'react';
import { Releases } from './styles';
import Card from './Card';

const dummyRecent = [
    {
        id: 2,
        songTitle: 'Phantasm',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67706c0000da84927772ce54afacdc191bd9bf'
    },
    {
        id: 3,
        songTitle: 'Rose Tinted',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67706c0000da84c72117606dd6c3f34178244a'
    },
    {
        id: 4,
        songTitle: 'Paradise',
        albumName: 'Dystopia',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c0cacb0919d8d000dfeba41'
    }
]

export default () => {
    return (
        <Releases>
            {/* Latest release goes here */}
            <h1>Releases</h1>
            <div className='bar'/>
            <div className='releases-container'>
                {dummyRecent.map(release => {
                    return <Card release={release} key={release.id}/>
                })}
            </div>
        </Releases>
    )
}