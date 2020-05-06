import axios from 'axios';

export const axiosSpotify = () => {
    return axios.create({
        baseUrl: 'http://localhost:5000/spotify'
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