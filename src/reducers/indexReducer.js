import {
    FETCH_SPOTIFY,
    FETCH_SPOTIFY_SUCCESS,
    FETCH_SPOTIFY_ERROR
} from '../actions/spotifyActions';

const initialState = {
    spotifyData: null,
    error: '',
    isFetching: false
}

export const indexReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}