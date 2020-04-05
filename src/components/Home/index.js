import React from 'react';
import { Releases } from './styles';
import Recent from './Recent/Recent';
import Instagram from './Instagram/Instagram';

export default () => {
    return (
        <>
            <Releases>
                <Recent/>
                <Instagram/>
            </Releases>
        </>
    );
}