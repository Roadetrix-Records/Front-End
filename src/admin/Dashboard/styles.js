import styled from 'styled-components';
import theme from '../theme';
import { Spotify } from '@styled-icons/boxicons-logos'
import { AddCircle } from '@styled-icons/material-outlined/';
import { Delete, DragHandle } from '@styled-icons/material/';

export const Dashboard = styled.div`
    display: flex;
    .wrapper{
        margin-left: 300px;
    }
`;

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
    }
`;

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

// export const PlaylistContainer = styled.div`
//     width: 500px;
//     height: 40%;
//     .top{
//         display: flex;
//         .content{
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             margin-left: 20px;
//             h1{
//                 font-family: ${theme.fonts.anton};
//                 font-size: 2.5rem;
//             }
//             .bar{
//                 width: 150px;
//                 height: 1px;
//                 margin: 5px 0;
//                 background-color: ${theme.colors.blueGreen};
//             }
//             p{
//                 font-family: ${theme.fonts.ubuntu};
//                 font-size: 1.3rem;
//             }
//         }
//     }
//     .bottom{
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }
// `;

// export const PlaylistInput = styled.div`
//     width: 100%;
//     img{
//         width: 200px;
//         margin-left:
//     }
//     form{
//         margin: 10px 0;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         input {
//             width: 60%;
//             height: 40px;
//             border-radius: 10px;
//             border-style: solid;
//             border-width: 1px;
//             border-color: ${theme.colors.blueGreen};
//             font-size: 1.3rem;
//             font-family: ${theme.fonts.ubuntu};
//             outline: none;
//         }
//         .update-btn{
//             width: 150px;
//             height: 40px;
//             border-radius: 10px;
//             background: rgb(91,192,190);
//             background: linear-gradient(0deg, rgba(91,192,190,1) 0%, rgba(77,168,191,1) 100%);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             cursor: pointer;
//             color: white;
//             margin-left: 10px;
//             p{
//                 font-family: ${theme.fonts.ubuntu};
//                 font-size: 1.3rem;
//                 color: inherit;
//             }
//             &:hover{
//                 background: rgba(255, 255, 255, 0);
//                 color: ${theme.colors.blueGreen};
//                 border: 1px solid ${theme.colors.blueGreen};
//                 width: 148px;
//                 height: 38px;
//             }
//         }
//     }
// `;

export const Submissions = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

export const Contact = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: white;
`;

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