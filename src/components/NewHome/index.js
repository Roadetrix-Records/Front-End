import React from 'react';
import Nav from '../Nav/Nav';
import Header from './Header/Header';
import { Home } from './homeStyles';

export default () => {
    const data = [];
    for(let i=0; i<200; i++){
        data.push('test');
    }

    return (
        <Home>
            <Nav/>
            <Header/>
            {/* {data.map(text => {
                return <div>{text}</div>
            })} */}
        </Home>
    );
}