import React from 'react';
import { Header, Button } from './headerStyles';
import spotifyMac from '../../../assets/spotify-mac.png';

export default () => {
    return (
        <Header>
            <div className='header-wrapper'>
                <div className='col-1'>
                    <h1>Roadetrix Records</h1>
                    <h2>Helping Artists in the Lo-fi community</h2>
                    <p>Submit your demo or view our releases!</p>
                    <div className='btn-wrapper'>
                        <Button 
                            color='black' 
                            width='150px' 
                            height='35px'
                        >Submit</Button>
                        <Button 
                            color='green' 
                            width='200px' 
                            height='35px'
                            solid={true}
                        >View Releases</Button>
                    </div>
                </div>
                <div className='col-2'>
                    <img src={spotifyMac}/>
                </div>
            </div>
        </Header>
    );
}