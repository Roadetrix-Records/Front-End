import React from 'react';
import Nav from '../Nav/Nav';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import { Home } from './homeStyles';

//TODO: Add support for routing

export default () => {
    const data = [];
    for(let i=0; i<200; i++){
        data.push('test');
    }

    return (
        <Home>
            <Nav/>
            <Header/>
            <Playlist/>
            {/* {data.map(text => {
                return <div>{text}</div>
            })} */}
        </Home>
    );
}