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
    const handleUpdate = async () => {
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
            await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
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
                            privateUrl: tracksRes[j].href
                        })
                    }
                })
                .catch(err => {
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
                const artistsRes = res.data.artists;
                for(let i=0; i<artistsRes.length; i++){
                    artists.push({
                        id: artistsRes[i].id,
                        name: artistsRes[i].name,
                        externalUrl: artistsRes[i].external_urls.spotify,
                        privateUrl: artistsRes[i].href,
                        followers: artistsRes[i].followers.total,
                        imgUrl: artistsRes[i].images[1].url
                    })
                }
            })
            .catch(err => {
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
            axios.post(`http://localhost:5000/spotify/data`, compiled)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
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

// OLD LOGIC - FOREACH doesn't work with promise chaining

// To view the data returned for albums, uncomment this console.log
// // console.log(res.data.items);
// let data = {};
// let albums = [];
// let artists = [];
// let tracks = [];
// let albumTracks = [];
// let albumArtists = [];
// let trackArtists = [];

// // Get all albums
// let newArtist = []; // Used to store all unique artists ids, to be fetched later
// f
// res.data.items.forEach(album => {
//     album.artists.forEach(artist => {
//         if(!newArtist.includes(artist.id)){
//             newArtist.push(artist.id);
//         }
//         // Data for album artists join table
//         albumArtists.push({
//             albumId: album.id,
//             artistId: artist.id
//         })
//     })                    
//     albums.push({
//         id: album.id,
//         name: album.name,
//         releaseDate: album.release_date,
//         imgUrl: album.images[1].url,
//         externalUrl: album.external_urls.spotify
//     })
//     // Get all tracks
//     axios.get(`https://api.spotify.com/v1/albums/${album.id}/tracks`, {
//         headers: {
//             'Authorization': 'Bearer ' + spotifyToken
//         }
//     })
//     .then(res => {
//         // To view the data returned for tracks per album, uncomment this console.log
//         // console.log(res.data.items);
//         res.data.items.forEach(track => {
//             // Data for album tracks join table
//             albumTracks.push({
//                 trackId: track.id,
//                 albumId: album.id
//             })
//             // Data for tracks
//             tracks.push({
//                 id: track.id,
//                 name: track.name,
//                 trackUrl: track.href
//             })
//             track.artists.forEach(artist => {
//                 trackArtists.push({
//                     trackId: track.id,
//                     artistId: artist.id
//                 })
//             })
//         })
//     })
// });

// // Get all artists - create a query string with all the existing artists (MAX 20 ARTIST IDs)
// let artistsQueryString = 'https://api.spotify.com/v1/artists?ids=';
// newArtist.forEach(artistId => {
//     artistsQueryString = artistsQueryString.concat(artistId, ',');
// })
// artistsQueryString = artistsQueryString.substring(0, artistsQueryString.length - 1);
// axios.get(artistsQueryString, {
//     headers: {
//         'Authorization': 'Bearer ' + spotifyToken
//     }
// })
// .then(res => {
//     // To view the data returned for artists, uncomment this console.log
//     // console.log(res.data.artists);
//     // Data for artists
//     res.data.artists.forEach(artist => {
//         artists.push({
//             id: artist.id,
//             name: artist.name,
//             externalUrl: artist.external_urls.spotify,
//             followers: artist.followers.total,
//             imgUrl: artist.images[1].url
//         });
//     });
// });

// // Structure returned data
// data = {
//     albums,
//     artists,
//     tracks,
//     albumTracks,
//     albumArtists,
//     trackArtists
// }

// // POST request to roadetrix backend, passing all the data
// console.log(data);
// axios.post('http://localhost:5000/spotify/data', data)
// .then(res => {
//     console.log(res.data);
// })
// .catch(err => {
//     console.log(err.message);
// })