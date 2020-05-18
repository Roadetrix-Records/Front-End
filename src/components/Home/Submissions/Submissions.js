import React from 'react';
import { SubmissionsContainer } from '../styles';
import dropbox from '../../../assets/dropbox.svg';
import googleDrive from '../../../assets/google-drive.svg';
import soundcloud from '../../../assets/soundcloud.svg';
import youtube from '../../../assets/youtube.svg';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <SubmissionsContainer>
            <h1>Submit your sound</h1>
            <p>Would you like to release your</p>
            <p>music with <span>Roadetrix</span>?</p>
            <div className='example-container'>
                <div className='col'>
                    <div className='display'>
                        <img src={dropbox} alt=''/>
                        <p>Dropbox</p>
                    </div>
                    <div className='display'>
                        <img src={googleDrive} alt=''/>
                        <p>Google Drive</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='display'>
                        <img src={soundcloud} alt=''/>
                        <p>Soundcloud</p>
                    </div>
                    <div className='display'>
                        <img src={youtube} alt=''/>
                        <p>YouTube</p>
                    </div>
                </div>
                
            </div>
            <Link to='/submissions'>
                <div className='cta-btn'>
                    <p>Submit Here</p>
                </div>
            </Link>
        </SubmissionsContainer>
    )
}