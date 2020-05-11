import React from 'react';
import Header from '../Header';
import { Releases } from './styles';

// Component Imports
import Recent from './Recent/Recent';
import Social from './Social/Social';

export default () => {
    return (
        <>
            <Releases>
                <Header dark='true'/>
                <Recent/>
            </Releases>
            <Social/>
        </>
    );
}