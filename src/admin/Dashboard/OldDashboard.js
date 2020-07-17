import React from 'react';
import Releases from './Releases';
import Playlists from './Playlists';
import Submissions from './Submissions';
import Contact from './Contact';
import { useHistory } from 'react-router-dom';
import { Dashboard, ToolBar } from './styles';

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
        </Dashboard>
    )
}
