import {
    FETCH_SPOTIFY,
    FETCH_SPOTIFY_SUCCESS,
    FETCH_SPOTIFY_ERROR
} from '../actions/spotifyActions';

const initialState = {
    spotifyData: {},
    error: '',
    isFetching: false
}

export const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SPOTIFY:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_SPOTIFY_SUCCESS:
            return {
                spotifyData: action.payload,
                error: '',
                isFetching: false
            }
        case FETCH_SPOTIFY_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}