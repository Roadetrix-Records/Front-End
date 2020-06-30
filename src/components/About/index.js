import React from 'react';
import Header from '../Header/Header';

import { About } from './styles';
import texture from '../../assets/about-bg-wave.svg';

export default () => {
    return (
        <About>
            <div className='top'>
                <Header dark='true'/>
                <img src={texture} className='texture'/>
            </div>        
        </About>
    );
}