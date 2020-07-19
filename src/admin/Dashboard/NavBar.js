import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, SideBar, PlaylistIcon, ReleasesIcon, SubmissionsIcon, MessagesIcon } from './styles';

export default ({ selected, handleChange }) => {
    const history = useHistory();

    const handleLogOut = () => {
        window.localStorage.removeItem('adminToken');
        history.push('/admin');
    }

    return (
        <Nav>
            <div className='btn-container'>
                <div className='btn' onClick={() => handleChange(0)}>
                    <PlaylistIcon selected={selected === 0}/>
                    <h2>Playlists</h2>
                    <SideBar selected={selected === 0}/>
                </div>
                <div className='btn' onClick={() => handleChange(1)}>
                    <ReleasesIcon selected={selected === 1}/>
                    <h2>Releases</h2>
                    <SideBar selected={selected === 1}/>
                </div>
                <div className='btn' onClick={() => handleChange(2)}>
                    <SubmissionsIcon selected={selected === 2}/>
                    <h2>Submissions</h2>
                    <SideBar selected={selected === 2}/>
                </div>
                <div className='btn' onClick={() => handleChange(3)}>
                    <MessagesIcon selected={selected === 3}/>
                    <h2>Messages</h2>
                    <SideBar selected={selected === 3}/>
                </div>
            </div>
            <div className='logout-container'>
                <div className='bar'/>
                <h2 onClick={handleLogOut}>Logout</h2>
            </div>
        </Nav>
    );
}