import React, { useEffect, useState } from 'react';
// Component Imports
import ReleaseCard from './ReleaseCard';

// Dependency Imports
import axios from 'axios';

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
import { Search } from 'styled-icons/boxicons-solid';


export default () => {
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

    useEffect(() => {
        if(search === ''){
            setFiltered(releases);
        } else {
            setFiltered(releases.filter(release => release.name.toLowerCase().includes(search)));
        }
    }, [search])

    return (
        <Releases>
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