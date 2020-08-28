import React from 'react';
import { Details, SpotifyLogo, Button, Artist } from './styles';

export default ({ release, handleClose }) => {
    console.log(release)
    return (
        <Details>
            <div className='img-container'>
                <div className='logo-wrapper'>
                    <SpotifyLogo/>
                </div>
                <div className='label-wrapper'>
                    <a href='https://open.spotify.com/artist/7Md5xGlvby3sPI2NLkbYlv'>
                        <div className='label'>
                            <p>Roadetrix</p>
                        </div>
                    </a>
                </div>
                <img alt={release.albumName} src={release.albumImgUrl}/>
            </div>
            <div className='main-info'>
                <div className='album-name'>
                    <h3>{release.albumName}</h3>
                    <p> - {release.tracks.length > 1 ? 'Album' : 'Single'}</p>
                </div>
                {release.artists.map(artist => {
                    return(
                        <div key={artist.artistId}>
                            <a href={artist.artistPublicUrl}>
                                <Artist>
                                    <img alt={artist.artistName} src={artist.artistImgUrl}/>
                                    <p>{artist.artistName}</p>
                                </Artist>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className='btn-container'>
                <Button onClick={handleClose}>
                    <p>Close</p>
                </Button>
                <Button>
                    <p>Listen on Spotify</p>
                </Button>
            </div>
        </Details>
    );
}