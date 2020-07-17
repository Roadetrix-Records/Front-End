import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';
import { Playlist, Album } from '@styled-icons/boxicons-solid/';
import { Audiotrack } from '@styled-icons/material/';
import { Mail } from '@styled-icons/entypo/';

const Nav = styled.nav`
    position: fixed;
    width: 300px;
    height: 100vh;
    background: rgb(11,19,43);
    background: linear-gradient(0deg, rgba(11,19,43,1) 0%, rgba(33,33,33,1) 100%); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2{
        font-family: ${theme.fonts.ubuntu};
        color: ${theme.colors.white};
        font-size: 2.3rem;
    }
    .btn-container{
        width: 100%;
        .btn{
            cursor: pointer;
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            position: relative;
            
        }
    }
    .logout-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        .bar{
            height: 1px;
            width: 80%;
            background-color: ${theme.colors.blueGreen};
            margin-bottom: 30px;
        }
        h2{
            cursor: pointer;
            &:hover{
                color: ${theme.colors.blueGreen};
            }
        }
    }
`;

const SideBar = styled.div`
    display: ${props => props.selected ? 'block' : 'none'};
    height: 100%;
    width: 5px;
    background-color: ${theme.colors.blueGreen};
    border-radius: 5px;
    position: absolute;
    right: 0;
`;

const PlaylistIcon = styled(Playlist)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

const ReleasesIcon = styled(Album)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

const SubmissionsIcon = styled(Audiotrack)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

const MessagesIcon = styled(Mail)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

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