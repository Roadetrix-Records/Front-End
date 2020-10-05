import React from 'react';
import { 
    Social, 
    YoutubeIcon,
    DiscordIcon, 
    TikTokIcon, 
    InstagramIcon 
} from './socialStyles';

import { H2 } from '../../globalStyles';

export default () => {
    return (
        <Social>
            <H2 color='white' bold={true}>Check us out on social media</H2>
            <div className='link-container'>
                <a href='https://www.youtube.com/channel/UClgt44OQ1TPnQIjYJJ_aNxQ'>
                    <YoutubeIcon/>
                </a>
                <a href='https://www.youtube.com/channel/UClgt44OQ1TPnQIjYJJ_aNxQ'>
                    <DiscordIcon/>
                </a>
                <a href='https://www.youtube.com/channel/UClgt44OQ1TPnQIjYJJ_aNxQ'>
                    <TikTokIcon/>
                </a>
                <a href='https://www.youtube.com/channel/UClgt44OQ1TPnQIjYJJ_aNxQ'>
                    <InstagramIcon/>
                </a>
            </div>
        </Social>
    );
}