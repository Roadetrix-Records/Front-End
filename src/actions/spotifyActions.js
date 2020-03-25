import axios from 'axios';

export const FETCH_SPOTIFY = 'FETCH_SPOTIFY';
export const FETCH_SPOTIFY_SUCCESS = 'FETCH_SPOTIFY_SUCCESS';
export const FETCH_SPOTIFY_ERROR = 'FETCH_SPOTIFY_ERROR';

export const getSpotifyData = () => dispatch => {
    dispatch({ type: FETCH_SPOTIFY });
    axios.get('http://localhost:5000/spotify', {
        crossdomain: true
    })
    .then(() => {
        dispatch({ type: FETCH_SPOTIFY_SUCCESS });
    })
    .catch(err => {
        dispatch({ type: FETCH_SPOTIFY_ERROR, payload: err.data });
    })
}