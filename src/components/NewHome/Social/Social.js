import React from 'react';
import { 
    Social, 
    YoutubeIcon,
    TikTokIcon, 
    InstagramIcon 
} from './socialStyles';

import { H2 } from '../../globalStyles';

export default () => {
    return (
        <Social>
            <H2 color='white' bold={true}>Check us out on social media</H2>
            <div className='link-container'>
                <a href='https://www.youtube.com/channel/UClgt44OQ1TPnQIjYJJ_aNxQ/'>
                    <YoutubeIcon/>
                </a>
                <a href='https://www.tiktok.com/@roadetrixrecords?source=h5_m'>
                    <TikTokIcon/>
                </a>
                <a href='https://www.instagram.com/roadetrix_records/'>
                    <InstagramIcon/>
                </a>
            </div>
        </Social>
    );
}