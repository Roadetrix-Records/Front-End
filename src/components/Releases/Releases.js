import React, { useEffect, useState } from 'react';
// Component Imports

// Dependency Imports
import axios from 'axios';

// Util Imports
import { BASE_URL } from '../../enviornment';

// Style Imports
import { Releases, Featured, Header, ImgContainer, FeaturedInfo, Divider, Button } from './styles';


export default () => {
    const [ releases, setReleases ] = useState([]);
    const [ featured, setFeatured ] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/spotify/albums`)
        .then(res => {
            setReleases(res.data);
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

    console.log(releases);
    console.log(featured)

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
                                    <Divider/>
                                    <p>{featured.albumName}</p>
                                </div>
                                <Button>View Details</Button>
                            </div>
                        </FeaturedInfo>                         
                    </Header>
                )}
            </Featured>
        </Releases>
    )
}