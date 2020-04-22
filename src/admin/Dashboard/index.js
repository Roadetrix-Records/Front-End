import React from 'react';
import spotifyAuth from '../../utils/spotifyAuth';
import axios from 'axios';


export default () => {
    /* 
        When the {update Spotify} button is clicked by an admin,
        If logged in
            This function will fetch all the necessary spotify data and send it to the backend to be stored in db
        If not logged in or expired token
            This function will redirect to the spotify login and then redirect back to the admin/dashboard route
    */
    const handleUpdate = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken');
        if(spotifyToken){
            const artist_id = '7Md5xGlvby3sPI2NLkbYlv'; // Id for Roadetrix Spotify Accout
            axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
                headers: {
                    'Authorization': 'Bearer ' + spotifyToken
                }
            })
            .then(res => {
                // To view the data returned for albums, uncomment this console.log
                // console.log(res.data.items);
                let data = {};
                let albums = [];
                let artists = [];
                let tracks = [];
                let albumTracks = [];
                let albumArtists = [];
                let trackArtists = [];

                // Get all albums
                let newArtist = []; // Used to store all unique artists ids, to be fetched later
                res.data.items.forEach(album => {
                    album.artists.forEach(artist => {
                        if(!newArtist.includes(artist.id)){
                            newArtist.push(artist.id);
                        }
                        // Data for album artists join table
                        albumArtists.push({
                            albumId: album.id,
                            artistId: artist.id
                        })
                    })                    
                    albums.push({
                        id: album.id,
                        name: album.name,
                        releaseDate: album.release_date,
                        imgUrl: album.images[1].url,
                        externalUrl: album.external_urls.spotify
                    })
                    // Get all tracks
                    axios.get(`https://api.spotify.com/v1/albums/${album.id}/tracks`, {
                        headers: {
                            'Authorization': 'Bearer ' + spotifyToken
                        }
                    })
                    .then(res => {
                        // To view the data returned for tracks per album, uncomment this console.log
                        // console.log(res.data.items);
                        res.data.items.forEach(track => {
                            // Data for album tracks join table
                            albumTracks.push({
                                trackId: track.id,
                                albumId: album.id
                            })
                            // Data for tracks
                            tracks.push({
                                id: track.id,
                                name: track.name,
                                trackUrl: track.href
                            })
                            track.artists.forEach(artist => {
                                trackArtists.push({
                                    trackId: track.id,
                                    artistId: artist.id
                                })
                            })
                        })
                    })
                });

                // Get all artists - create a query string with all the existing artists (MAX 20 ARTIST IDs)
                let artistsQueryString = 'https://api.spotify.com/v1/artists?ids=';
                newArtist.forEach(artistId => {
                    artistsQueryString = artistsQueryString.concat(artistId, ',');
                })
                artistsQueryString = artistsQueryString.substring(0, artistsQueryString.length - 1);
                axios.get(artistsQueryString, {
                    headers: {
                        'Authorization': 'Bearer ' + spotifyToken
                    }
                })
                .then(res => {
                    // To view the data returned for artists, uncomment this console.log
                    // console.log(res.data.artists);
                    // Data for artists
                    res.data.artists.forEach(artist => {
                        artists.push({
                            id: artist.id,
                            name: artist.name,
                            externalUrl: artist.external_urls.spotify,
                            followers: artist.followers.total,
                            imgUrl: artist.images[1].url
                        });
                    });
                });

                // Structure returned data
                data = {
                    albums,
                    artists,
                    tracks,
                    albumTracks,
                    albumArtists,
                    trackArtists
                }

                // POST request to roadetrix backend, passing all the data
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                if(err.response.status === 401){
                    window.localStorage.removeItem(spotifyToken);
                    window.location.href = spotifyAuth();
                }
            })
        }else{
            window.location.href = spotifyAuth();
        }
    }
    
    return (
        <div>
            <h1>dashboard</h1>
            <button onClick={handleUpdate}>Update Spotify</button>
        </div>
    );
}