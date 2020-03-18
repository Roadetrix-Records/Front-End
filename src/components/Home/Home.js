import React from 'react';
import Header from '../Header/Header';

import { Body } from '../GlobalStyles';
import { Section, SpotifyCard } from './HomeStyles';

function Home(){
    return(
        <Body>
            <Header/>
            <Section>
                <SpotifyCard/>
                <SpotifyCard/>
                <SpotifyCard/>
            </Section>
            <Section>
                <h1>Integrated Instagram Feed</h1>
            </Section>
            <Section>
                <h1>Integrated Youtube Feed</h1>
            </Section>
        </Body>
    );
}

export default Home;