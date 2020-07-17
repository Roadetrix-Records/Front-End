import React, { useEffect, useState } from 'react';
// Component Imports

// Dependency Imports
import axios from 'axios';

// Util Imports
import { BASE_URL } from '../../enviornment';

// Style Imports
import { Releases, Featured } from './styles';


export default () => {
    const [ releases, setReleases ] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/albums`)
        .then(res => {
            setReleases(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Releases>
            <Featured>
                
            </Featured>
        </Releases>
    )
}