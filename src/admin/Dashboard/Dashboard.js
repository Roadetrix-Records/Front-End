import React, { useState } from 'react';
import Playlists from './Playlists/Playlists';
import Releases from './Releases/Releases';
import NavBar from './NavBar';
import { Dashboard } from './styles';

export default () => {
    // Change this to 0
    const [ selected, setSelected ] = useState(1);

    const handleChange = value => {
        setSelected(value);
    }

    return (
        <Dashboard>
            <NavBar selected={selected} handleChange={handleChange}/>
            <div className='wrapper'>
                {selected === 0 && (
                    <Playlists/>
                )}
                {selected === 1 && (
                    <Releases/>
                )}
                {selected === 2 && (
                    <div>
                        <h1>Submissions</h1>
                    </div>
                )}
                {selected === 3 && (
                    <div>
                        <h1>Messages</h1>
                    </div>
                )}
            </div>
        </Dashboard>
        
    )
}