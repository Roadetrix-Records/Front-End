import React from 'react';
import { 
    Footer,
    YoutubeIcon,
    DiscordIcon,
    TikTokIcon,
    InstagramIcon,
    StyledLink
} from './footerStyles';
import { H4, Text } from '../../globalStyles';
import logo from '../../../assets/logo-white.png';

export default () => {
    return (
        <Footer>
            <div className='footer-wrapper'>
                <div className='top-row'>
                    <div className='logo-wrapper'>
                        <img src={logo} alt='Roadetrix flower'/>
                        <H4 color='white' bold={true}>Roadetrix Records</H4>
                    </div>
                    <div className='footer-nav'>
                        <div className='col-1'>
                            <Text 
                                color='white' 
                                style={{ textDecoration: 'underline', marginBottom: '6px' }}
                            >Resources</Text>
                            <StyledLink to='/releases'>Releases</StyledLink>
                            <StyledLink to='/submissions'>Submit Demo</StyledLink>
                            <StyledLink to='/about'>About</StyledLink>
                            <StyledLink to='/contact'>Contact</StyledLink>
                        </div>
                        <div className='col-2'>
                            <Text 
                                color='white' 
                                style={{ textDecoration: 'underline', marginBottom: '6px' }}
                            >Admin</Text>
                            <StyledLink>Dashboard</StyledLink>
                        </div>
                    </div>
                    <div className='footer-social'>
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
                </div>
                <Text color='white'>Roadetrix Records, LLC</Text>
            </div>
        </Footer>
    );
}