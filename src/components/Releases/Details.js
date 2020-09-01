import React from 'react';
import { Details, SpotifyLogo, Button, Artist, Track, ExplicitIcon, DetailsButton } from './styles';

/**
 * convertMsToMinute
 * @param {int} ms - represents time in milliseconds
 * 
 */
const convertMsToMinute = ms => {
    let minutes = Math.floor((ms / 1000 / 60 / 60) * 60);
    let seconds = Math.floor(((ms / 1000 / 60/ 60) * 60 - minutes) * 60);

    if(seconds < 10){
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
}

export default ({ release, handleClose }) => {
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
            <div className='tracks'>
                <h2>Tracks</h2>
                <div className='tracks-wrapper'>
                    {release.tracks.map((track, index) => {
                        return (
                            <Track key={track.trackId} index={index}>
                                <p>{track.trackName}</p>
                                <div className='info'>
                                    {track.explicit && <ExplicitIcon/>}
                                    <p>{convertMsToMinute(track.duration)}</p>
                                </div>
                            </Track>
                        )
                    })}
                </div>
            </div>
            <div className='btn-container'>
                <DetailsButton onClick={handleClose}>
                    <p>Close</p>
                </DetailsButton>
                <a href={release.albumPublicUrl}>
                    <DetailsButton color='spotify'>
                        <p>Listen on Spotify</p>
                    </DetailsButton>
                </a>
            </div>
        </Details>
    );
}