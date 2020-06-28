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
                <div className='meet'>
                    <h3>Meet Roadetrix</h3>
                    <p className='light-text'>
                        Roadetrix Records is an emerging independent record label focusing on releasing chill music ranging from lofi, 
                        chillhop, soul, and R&B.  Our purpose is to provide a platform for artists, via the Roadetrix brand, to get 
                        their music heard, build meaningful relationships, and impact the community in a meaningful way.  
                        The company was established in 2019 with a vision to serve the artists within the community and 
                        of course for the love of music.
                    </p>
                </div>
            </div>
            <div className='mission'>
                <h3>Roadetrix's Mission</h3>
                <p className='dark-text'>
                    Our dreams are powerful things, dreams that long for love, kindness, and something more than just ourselves, 
                    such dreams encompass our mission.  We want to help artists follow their dreams, whether that is lending a 
                    helping hand or becoming a bigger part of their journey.  Keep moving forward, much love.
                </p>
                <p className='dark-text'>
                    One thing we like to do to help the artists of the community is our open playlist submissions on Instagram, 
                    give us a follow and send us some of your released music, keep making great music!  
                </p>
            </div>
        
        </About>
    );
}