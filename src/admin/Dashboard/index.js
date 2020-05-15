import React from 'react';
import Releases from './Releases';
import { useHistory } from 'react-router-dom';
import { Dashboard } from './styles';
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
            <img src={textureOne} alt='' id='textureOne'/>
            <img src={textureTwo} alt='' id='textureTwo'/>
            <img src={textureThree} alt='' id='textureThree'/>
            <Releases/>
            <button onClick={handleLogOut}>Logout</button>
        </Dashboard>
    )
}
