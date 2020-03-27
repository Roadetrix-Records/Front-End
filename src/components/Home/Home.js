import React from 'react';
import Header from '../Header/Header';
import Carousel from './Carousel';
import InstagramFeed from './InstagramFeed';

import { Body } from '../GlobalStyles';
import { Section } from './HomeStyles';

function Home(){
    return(
        <Body gradient>
            <Header/>
            <Section gradient>
                <InstagramFeed/>
            </Section>
            <Carousel>
                
            </Carousel>
            <Section>
                <h1>Integrated Youtube Feed</h1>
            </Section>
        </Body>
    );
}

export default Home;