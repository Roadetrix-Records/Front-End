import React from 'react';
import { Header } from './headerStyles';
import { H1, H3, Text, SolidButton, Button } from '../../globalStyles';
import spotifyMac from '../../../assets/spotify-mac.png';

export default () => {
    return (
        <Header>
            <div className='header-row-top'>
                <div className='img-wrapper'>
                    <img src={spotifyMac}/>
                </div>
            </div>
            <div className='header-row-bottom'>
                <H1>Roadetrix Records</H1>
                <div style={{ margin: '20px 0' }}>
                    <H3 bold={true}>Helping Artists in the Lo-fi Community</H3>
                </div>
                <Text>Submit a demo or view our releases!</Text>
                <div className='btn-wrapper'>
                    <Button
                        width='170px'
                        height='40px'
                        color='black'
                    >Submit Demo</Button>
                    <SolidButton
                        width='170px'
                        height='40px'
                        color='green'
                    >View Releases</SolidButton>
                </div>
            </div>
        </Header>
    );
}