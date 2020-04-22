import React from 'react';
import { Releases } from './styles';

// Component Imports
import Recent from './Recent/Recent';

// Asset Imports
import darkWavyBg from '../../assets/dark-wavy-bg.svg';
import pinkWavyBg from '../../assets/pink-wavy-bg.svg';

export default () => {
    return (
        <>
            <Releases>
                <Recent/>
            </Releases>
            <img src={darkWavyBg} className='top' alt=''/>
            <img src={pinkWavyBg} className='bottom' alt=''/>
        </>
    );
}