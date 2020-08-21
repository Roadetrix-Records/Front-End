import React, { useState, useEffect } from 'react';
import { Details } from './styles';
import { BASE_URL } from '../../enviornment';
import axios from 'axios';

export default ({ id }) => {
    const [ release, setRelease ] = useState({});

    useEffect(() => {
        if(id){
            axios.get(`${BASE_URL}/spotify/release-data/${id}`)
            .then(res => {
                console.log(res.data);
                setRelease(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        } 
    }, [id])

    return (
        <Details>

        </Details>
    );
}