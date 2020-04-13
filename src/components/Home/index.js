import React from 'react';
import { Releases, Instagram } from './styles';

// Component Imports
import Recent from './Recent/Recent';
import Feed from './Instagram/Feed';

// Asset Imports
import darkWavyBg from '../../assets/dark-wavy-bg.svg';
import pinkWavyBg from '../../assets/pink-wavy-bg.svg';

export default () => {
    return (
        <>
            <Releases>
                <Recent/>
            </Releases>
            <Instagram>
                <img src={darkWavyBg} className='top'/>
                <img src={pinkWavyBg} className='bottom'/>
                <Feed/>
            </Instagram>
        </>
    );
}