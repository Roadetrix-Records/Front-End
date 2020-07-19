import styled from 'styled-components';
import theme from '../theme';
import { Spotify } from '@styled-icons/boxicons-logos'
import { AddCircle } from '@styled-icons/material-outlined/';
import { Delete, DragHandle, Audiotrack } from '@styled-icons/material/';
import { Playlist, Album } from '@styled-icons/boxicons-solid/';
import { Mail } from '@styled-icons/entypo/';

export const Dashboard = styled.div`
    display: flex;
    .wrapper{
        margin-left: 300px;
    }
`;

export const Nav = styled.nav`
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

export const SideBar = styled.div`
    display: ${props => props.selected ? 'block' : 'none'};
    height: 100%;
    width: 5px;
    background-color: ${theme.colors.blueGreen};
    border-radius: 5px;
    position: absolute;
    right: 0;
`;

// ----------- Styles for playlist page -----------
export const PlaylistContainer = styled.div`
    .add-playlist{
        margin: 20px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        .add-btn{
            margin-right: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }        
        p{
            font-family: ${theme.fonts.ubuntu};
            font-size: 1.5rem;
            user-select: none;
        }
    }
    .error-container{
        margin-left: 159px;
    }
`;

export const AddForm = styled.form`
    display: ${props => props.display ? 'flex' : 'none'};
    align-items: center;
    input{
        width: 400px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid ${theme.colors.lightGrey};
        border-color: ${props => props.error && 'red'};
        outline: ${props => props.error && 'red'};
    }
    .update-btn{
        margin-left: 20px;
        height: 35px;
        width: 150px;
        background: rgb(91,192,190);
        background: linear-gradient(90deg, rgba(91,192,190,1) 0%, rgba(77,168,191,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        color: ${theme.colors.white};
        p{
            font-family: ${theme.fonts.ubuntu};
            font-size: 1.5rem;
            color: inherit;
            user-select: none;
        }
        &:hover{
            width: 148px;
            height: 33px;
            border: 1px solid ${theme.colors.blueGreen};
            color: ${theme.colors.blueGreen};
            background: none;
        }
    }
`;

export const PlaylistsPreview = styled.div`
    margin-left: 20px;
    margin-top: 50px;
    .title{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        h1{
            font-family: ${theme.fonts.ubuntu};
            font-size: 2rem;
            user-select: none;
        }
        p{
            font-family: ${theme.fonts.ubuntu};
            font-size: 1.3rem;
            margin-left: 10px;
            user-select: none;
        }
    }
    .draggable-wrapper{
        width: 720px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        height: 230px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PlaylistCard = styled.div`
    width: 150px;
    margin: 0 10px;
    .toolbar{
        width: calc(100% - 2px);
        height: 30px;
        border: 1px solid ${theme.colors.lightGrey};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img{
        width: 100%;
        user-select: none;
    }
`;

// ----------- Styles for release page -----------
export const ReleaseContainer = styled.div`
    width: 500px;
    height: 40%;
    display: flex;
    align-items: flex-start;
    .top{
        display: flex;
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 20px;
            h1{
                font-family: ${theme.fonts.anton};
                font-size: 2.5rem;
            }
            .bar{
                width: 150px;
                height: 1px;
                margin: 5px 0;
                background-color: ${theme.colors.blueGreen};
            }
            .update-btn{
                width: 200px;
                height: 30px;
                background-color: ${theme.colors.blueGreen};
                color: ${theme.colors.white};
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: ${theme.fonts.ubuntu};
                font-size: 2rem;
                cursor: pointer;
            }
        }
    }
`;

// ----------- Styles for submissions page -----------
export const Submissions = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

// ----------- Styles for contact page -----------
export const Contact = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

// ----------- Styles for extra components -----------
export const Error = styled.p`
    display: ${props => props.display ? 'block' : 'none'};
    font-size: 1.5rem;
    color: red;
    font-family: ${theme.fonts.ubuntu};
    user-select: none;
`;

export const SpotifyLogo = styled(Spotify)`
    color: ${theme.colors.black};
    width: 80px;
`;

export const AddIcon = styled(AddCircle)`
    color ${theme.colors.blueGreen};
    width: 40px;
`;

export const DeleteIcon = styled(Delete)`
    color: ${theme.colors.lightGrey};
    width: 22px;
    margin-left: 5px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`;

export const DragIcon = styled(DragHandle)`
    color: ${theme.colors.lightGrey};
    width: 25px;
    margin-right: 5px;
    cursor: grab;
`;

export const PlaylistIcon = styled(Playlist)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

export const ReleasesIcon = styled(Album)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

export const SubmissionsIcon = styled(Audiotrack)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;

export const MessagesIcon = styled(Mail)`
    color: ${props => props.selected ? theme.colors.blueGreen : theme.colors.white};
    width: 30px;
    margin-left: 50px;
    margin-right: 20px;
`;