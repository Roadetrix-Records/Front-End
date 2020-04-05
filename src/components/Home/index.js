import React from 'react';
import { Releases } from './styles';
import Recent from './Recent/Recent';
import Instagram from './Instagram/Instagram';
import Submission from './Submission/Submission';

export default () => {
    return (
        <>
            <Releases>
                <Recent/>
                <Instagram/>
                <Submission/>
            </Releases>
        </>
    );
}