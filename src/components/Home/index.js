import React from 'react';

// Component Imports
import Header from '../Header';
import Recent from './Recent/Recent';
import Social from './Social/Social';
import Playlists from './Playlists/Playlists';
import Submissions from './Submissions/Submissions';

// Style Imports
import { Releases } from './styles';


export default () => {
    return (
        <>
            <Releases>
                <Header dark='true'/>
                <Recent/>
            </Releases>
            <Social/>
            <Playlists/>
            <Submissions/>
        </>
    );
}