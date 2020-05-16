import React from 'react';
import Releases from './Releases';
import Playlists from './Playlists';
import Submissions from './Submissions';
import Contact from './Contact';
import { useHistory } from 'react-router-dom';
import { Dashboard, ToolBar } from './styles';
import textureOne from '../../assets/dashboard-texture-1.svg';
import textureTwo from '../../assets/dashboard-texture-2.svg';
import textureThree from '../../assets/dashboard-texture-3.svg';

export default () => {
    const history = useHistory();

    const handleLogOut = () => {
        window.localStorage.removeItem('adminToken');
        history.push('/admin');
    }

    return (
        <Dashboard>
            <div className='row'>
                <div className='col'>
                    <ToolBar>
                        <div className='logout-btn' onClick={handleLogOut}>
                            <p>Logout</p>
                        </div>
                    </ToolBar>
                    <Releases/>
                    <Playlists/>
                </div>
                <div className='col'>
                    <Submissions/>
                </div>
                <div className='col'>
                    <Contact/>
                </div>
            </div>
            <img src={textureOne} alt='' id='textureOne'/>
            <img src={textureTwo} alt='' id='textureTwo'/>
            <img src={textureThree} alt='' id='textureThree'/>
        </Dashboard>
    )
}
