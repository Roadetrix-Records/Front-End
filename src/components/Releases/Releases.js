import React, { useEffect, useState } from 'react';
// Component Imports
import ReleaseCard from './ReleaseCard';
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
}));

export default () => {
    const classes = useStyles();

    const [ releases, setReleases ] = useState([]);
    const [ featured, setFeatured ] = useState(null);
    const [ search, setSearch ] = useState('');
    const [ filtered, setFiltered ] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/albums`)
        .then(res => {
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
     * Allows the user to search releases by release name
     */
    useEffect(() => {
        if(search === ''){
            setFiltered(releases);
        } else {
            setFiltered(releases.filter(release => {
                return release.name.toLowerCase().includes(search)
            }));
        }
    }, [search])

    return (
        <Releases>
            <Backdrop className={classes.backdrop} open={!featured || !releases}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Featured>
                {featured && (
                    <Header>
                        <ImgContainer img={featured.albumImgUrl}/>
                        <FeaturedInfo>
                            <img src={featured.albumImgUrl}/>
                            <div className='info'>
                                <div>
                                    <h1>Check out our featured release!</h1>
                                    <Divider color='white'/>
                                    <p>{featured.albumName}</p>
                                </div>
                                <Button>View Details</Button>
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
                            return <ReleaseCard release={release} key={release.id}/>
                        })}
                    </ReleaseContainer>
                </ReleaseWrapper>
            )}
        </Releases>
    )
}