import React from 'react';
import { About } from './aboutStyles';
import { H3, Text, SolidButton } from '../../globalStyles';

export default () => {
    return (
        <About>
            <H3 bold={true}>What is Roadetrix Records?</H3>
            <Text style={{ marginTop: '40px' }}>
                Roadetrix Records is an emerging independent record label focusing 
                on releasing chill music ranging from lofi, chillhop, soul, and R&B. 
            </Text>
            <Text style={{ marginTop: '40px' }}>
                Our purpose is to provide a platform for artists, via the Roadetrix brand, 
                to get their music heard, build meaningful relationships, and impact the 
                community in a meaningful way.
            </Text>
            <SolidButton 
                width='150px'
                height='40px'
                color='green'
                style={{ marginTop: '40px' }}
            >
                Learn More
            </SolidButton>
        </About>
    );
}