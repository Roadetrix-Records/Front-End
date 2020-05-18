import axios from 'axios';
import { BASE_URL } from '../enviornment';

export const axiosSpotify = () => {
    return axios.create({
        baseUrl: `${BASE_URL}/spotify`
    })
}

export const spotifyApi = () => {
    const spotifyToken = window.localStorage.getItem('spotifyToken');

    return axios.create({
        baseUrl: 'https://api.spotify.com/v1',
        headers: {
            'Authorization': 'Bearer ' + spotifyToken
        }
    })
}