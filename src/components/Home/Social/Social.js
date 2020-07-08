import React from 'react';
import { SocialContainer, SpotifySocial, InstagramSocial, YouTubeSocial, DiscordSocial, TwitterSocial } from '../styles';

export default () => {
    return (
        <SocialContainer>
            <h1>Join our community!</h1>
            <div className='social-container'>
                <div className='social-links'>
                    <a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/user/4qimydg6y0y7cp06tky7j9uog?si=_hatfTZVTTGdN0Cqftr93Q'>
                        <div className='social'>
                            <SpotifySocial/>
                            <h2>Spotify</h2>
                        </div>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://instagram.com/roadetrix_records?igshid=lbbvumwcyvjs'>
                        <div className='social'>
                            <InstagramSocial/>
                            <h2>Instagram</h2>
                        </div>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCtCRT7BzrcgsAZyhNJl3h_w'>
                        <div className='social'>
                            <YouTubeSocial/>
                            <h2>YouTube</h2>
                        </div>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://discord.gg/bNMxkhk'>
                        <div className='social'>
                            <DiscordSocial/>
                            <h2>Discord</h2>
                        </div>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/Roadetrixmusic'>
                        <div className='social'>
                            <TwitterSocial/>
                            <h2>Twitter</h2>
                        </div>
                    </a>
                </div>
            </div>
            
        </SocialContainer>
    )
}