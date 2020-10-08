import React from 'react';
import { CTA, Card, Bar, ArrowIcon } from './ctaStyles';
import { H4, Text } from '../../globalStyles';

export default () => {
    return (
        <CTA>
            <Bar/>
            <div className='wrapper'>
                <Card>
                    <div className='content'>
                        <div className='title'>
                            <H4 color='green' bold='true'>Listen to our releases</H4>
                            <ArrowIcon/>
                        </div>
                        <Text>Our releases reach over 160,000+ monthly listeners. Find out what kind of music we love on our Spotify!</Text>
                    </div>
                </Card>
                <Card>
                    <div className='content'>
                        <div className='title'>
                            <H4 color='green' bold='ture'>Submit your demo</H4>
                            <ArrowIcon/>                        
                        </div>
                        <Text>We are actively looking for new artists to join our rapidly growing label. Submit a demo if you would like to release your music with Roadetrix Records.</Text>
                    </div>
                </Card>
            </div>
        </CTA>
    );
}