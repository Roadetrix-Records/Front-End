import React, { useEffect, useState } from 'react';
// Component Imports
import ReleaseCard from './ReleaseCard';
import Details from './Details';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Dependency Imports
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

// Util Imports
import { BASE_URL } from '../../enviornment';

// Style Imports
import { 
    Releases, 
    Featured, 
    Header, 
    ImgContainer, 
    FeaturedInfo, 
    Divider, 
    Button, 
    SubHeader, 
    SearchIcon, 
    ReleaseContainer,
    ReleaseWrapper
} from './styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    root: {
        position: 'relative',
    }
}));

export default () => {
    const classes = useStyles();

    const [ releases, setReleases ] = useState([]);
    const [ featured, setFeatured ] = useState(null);
    const [ search, setSearch ] = useState('');
    const [ filtered, setFiltered ] = useState([]);
    const [ currentRelease, setCurrentRelease ] = useState(null); 

    const handleClick = id => {
        setCurrentRelease(releases.find(release => release.albumId === id));
    }

    const handleClose = () => {
        setCurrentRelease(null);
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/releases`)
        .then(res => {
            console.log(res.data);
            setReleases(res.data);
            setFiltered(res.data);
        })
        .catch(err => {
            console.log(err);
        })

        axios.get(`${BASE_URL}/spotify/featured`)
        .then(res => {
            setFeatured(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    /**
     * Allows the user to search releases by release name, artist name, or track name
     */
    useEffect(() => {
        if(search === ''){
            setFiltered(releases);
        } else {
            const searchAsLower = search.toLowerCase();
            setFiltered(releases.filter(release => {
                return release.albumName.toLowerCase().includes(searchAsLower) ||
                    release.artists.some(artist => artist.artistName.toLowerCase().includes(searchAsLower)) ||
                    release.tracks.some(track => track.trackName.toLowerCase().includes(searchAsLower))
            }));
        }
    }, [search, releases])

    return (
        <Releases>
            <Backdrop className={classes.backdrop} open={!featured || !releases}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Backdrop className={classes.backdrop} open={currentRelease !== null}>
                {currentRelease && (
                    <Details release={currentRelease} handleClose={handleClose}/>
                )}
            </Backdrop>
            <Featured>
                {featured && (
                    <Header>
                        <ImgContainer img={featured.albumImgUrl}/>
                        <FeaturedInfo>
                            <img src={featured.albumImgUrl} alt={featured.albumName}/>
                            <div className='info'>
                                <div className='featured-header'>
                                    <h1>Check out our featured release!</h1>
                                    <Divider color='white'/>
                                    <p>{featured.albumName}</p>
                                </div>
                                <Button onClick={() => handleClick(featured.albumId)}>
                                    <p>View Details</p>
                                </Button>
                            </div>
                        </FeaturedInfo>                         
                    </Header>
                )}
            </Featured>
            <SubHeader>
                <div className='search-bar-wrapper'>
                    <div className='search-bar'>
                        <SearchIcon/>
                        <input
                            placeholder='Search our releases!'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <Divider/>
            </SubHeader>
            {filtered && (
                <ReleaseWrapper>
                    <ReleaseContainer>
                        {filtered.map(release => {
                            return <ReleaseCard release={release} key={release.albumId} handleClick={handleClick}/>
                        })}
                    </ReleaseContainer>
                </ReleaseWrapper>
            )}
        </Releases>
    )
}