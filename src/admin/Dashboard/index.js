import React from 'react';
import spotifyAuth from '../../utils/spotifyAuth';
import axios from 'axios';


export default () => {
    const handleUpdate = () => {
        const spotifyToken = window.localStorage.getItem('spotifyToken');
        if(spotifyToken){
            const artist_id = '7Md5xGlvby3sPI2NLkbYlv';
            axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, 
            {
                headers: {
                    'Authorization': 'Bearer ' + spotifyToken
                }
            })
            .then(res => {
                console.log(res.data.items);
                // Data to be stored in db
                const data = [];

                // Artists found while mapping through album data
                const artists = [];

                // Add all albums to the final returned array
                data.push(res.data.items.map(album => {
                    for(let i=0; i<album.artists.length; i++){
                        if(!artists.includes(album.artists[i].href)){
                            artists.push(album.artists[i].href);
                        }
                    }
                    return {
                        id: album.id,
                        name: album.name,
                        releaseDate: album.release_date,
                        imgUrl: album.images[1].url,
                        externalUrl: album.external_urls.spotify
                    }
                }));

                // Add all artists to the final retunred array
                const formattedArtists = [];
                artists.forEach(artist => {
                    axios.get(artist,
                    {
                        headers: {
                            'Authorization': 'Bearer ' + spotifyToken
                        }
                    })
                    .then(res => {
                        formattedArtists.push({
                            id: res.data.id,
                            name: res.data.name,
                            externalUrl: res.data.external_urls.spotify,
                            followers: res.data.followers.total,
                            imgUrl: res.data.images[1].url
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
                data.push(formattedArtists);

                

                console.log(data);
            })
            .catch(err => {
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