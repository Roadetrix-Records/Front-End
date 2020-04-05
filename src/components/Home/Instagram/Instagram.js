import React from 'react';
import { InstaDisplay } from '../styles';
import darkWavyBg from '../../../assets/dark-wavy-bg.svg';
import pinkWavyBg from '../../../assets/pink-wavy-bg.svg';
import Feed from './Feed';

export default () => {
    return (
        <InstaDisplay>
            <img src={darkWavyBg} className='top'/>
            <img src={pinkWavyBg} className='bottom'/>
            <Feed/>
        </InstaDisplay>
    );
}