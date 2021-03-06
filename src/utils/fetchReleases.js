import spotifyAuth from './spotifyAuth';
import { BASE_URL } from '../enviornment';
import moment from 'moment';
import axios from 'axios';

/* 
    When the {update Spotify} button is clicked by an admin,
    If logged in
        This function will fetch all the necessary spotify data and send it to the backend to be stored in db
    If not logged in or expired token
        This function will redirect to the spotify login and then redirect back to the admin/dashboard route
*/
export const fetchReleases = async () => {
    const spotifyToken = window.localStorage.getItem('spotifyToken');
    if(spotifyToken){
        const artist_id = '7Md5xGlvby3sPI2NLkbYlv'; // Id for Roadetrix Spotify Account

        // Main data arrays
        const albums = [];
        const artists = [];
        const tracks = [];
        const albumArtists = [];
        const albumTracks = [];
        const trackArtists = [];

        // Helper arrays
        const foundArtists = [];

        // ================= Get data for albums =================
        await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums?limit=50`, {
            headers: {
                'Authorization': 'Bearer ' + spotifyToken
            }
        })
        .then(res => {
            const data = res.data.items;

            for(let i=0; i<data.length; i++){
                for(let j=0; j<data[i].artists.length; j++){
                    if(!foundArtists.includes(data[i].artists[j].id)){
                        foundArtists.push(data[i].artists[j].id);
                    }

                    // Get data for albumId with artistId
                    albumArtists.push({
                        albumId: data[i].id,
                        artistId: data[i].artists[j].id
                    })
                }
                albums.push({
                    id: data[i].id,
                    name: data[i].name,
                    releaseDate: data[i].release_date,
                    imgUrl: data[i].images[1].url,
                    externalUrl: data[i].external_urls.spotify,
                    privateUrl: data[i].href
                })
            }
        })
        .catch(err => {
            console.log('data for albums', err);
            if(err.response.status === 401){
                window.localStorage.removeItem(spotifyToken);
                window.location.href = spotifyAuth();
            }
        })

        // ================= Get data for tracks =================
        for(let i=0; i<albums.length; i++){
            await axios.get(`${albums[i].privateUrl}/tracks`, {
                headers: {
                    'Authorization': 'Bearer ' + spotifyToken
                }
            })
            .then(res => {
                const tracksRes = res.data.items;
                console.log(tracksRes)
                for(let j=0; j<tracksRes.length; j++){

                    // Get data for albumId with trackId
                    albumTracks.push({
                        albumId: albums[i].id,
                        trackId: tracksRes[j].id
                    })

                    // Get data for trackId with artistId
                    for(let k=0; k<tracksRes[j].artists.length; k++){
                        if(!foundArtists.includes(tracksRes[j].artists[k].id)){
                            foundArtists.push(tracksRes[j].artists[k].id);
                        }
                        trackArtists.push({
                            trackId: tracksRes[j].id,
                            artistId: tracksRes[j].artists[k].id
                        })    
                    }

                    tracks.push({
                        id: tracksRes[j].id,
                        name: tracksRes[j].name,
                        externalUrl: tracksRes[j].external_urls.spotify,
                        privateUrl: tracksRes[j].href,
                        duration: tracksRes[j].duration_ms,
                        explicit: tracksRes[j].explicit,
                        previewUrl: tracksRes[j].preview_url
                    })
                }
            })
            .catch(err => {
                console.log('data for tracks', err);
                if(err.response.status === 401){
                    window.localStorage.removeItem(spotifyToken);
                    window.location.href = spotifyAuth();
                }
            })
        }

        // ================= Get data for artists =================
        let artistsQueryString = 'https://api.spotify.com/v1/artists?ids=';
        for(let i=0; i<foundArtists.length; i++){
            artistsQueryString = artistsQueryString.concat(foundArtists[i], ',');
        }
        artistsQueryString = artistsQueryString.substring(0, artistsQueryString.length - 1);

        await axios.get(artistsQueryString, {
            headers: {
                'Authorization': 'Bearer ' + spotifyToken
            }
        })
        .then(res => {
            console.log(res);
            const artistsRes = res.data.artists;
            for(let i=0; i<artistsRes.length; i++){
                artists.push({
                    id: artistsRes[i].id,
                    name: artistsRes[i].name,
                    externalUrl: artistsRes[i].external_urls.spotify,
                    privateUrl: artistsRes[i].href,
                    followers: artistsRes[i].followers.total,
                    imgUrl: artistsRes[i].images[1] ? artistsRes[i].images[1].url : ''
                })
            }
        })
        .catch(err => {
            console.log('data for artists', err);
            if(err.response.status === 401){
                window.localStorage.removeItem(spotifyToken);
                window.location.href = spotifyAuth();
            }
        })

        const compiled = {
            albums,
            artists,
            tracks,
            albumArtists,
            albumTracks,
            trackArtists
        }
        // ================= Handle post request to backend =================
        await axios.post(`${BASE_URL}/spotify/data`, compiled, {
            headers: {
                Authorization: window.localStorage.getItem('adminToken')
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('POST request to backend:', err);
        })

        // ================= Update LastFetch =================
        let currentDate = await moment().format('MMMM Do YYYY, h:mm:ss a')
        await axios.put(`${BASE_URL}/spotify/last-fetch`, {
            date: currentDate
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

        return true;
    }else{
        window.location.href = spotifyAuth();
    }
}