import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpotifyData } from '../../actions/spotifyActions';

// Component Imports
import Nav from './Nav/Nav';

// Style Imports
import { Container, Main, Box, Button, ButtonContainer } from './DashboardStyles';

function Dashboard(){
    const data = useSelector(state => state.spotifyData);
    const dispatch = useDispatch();

    const loginSpotify = () => {
        console.log('Logging in');
    }

    const fetchSpotify = () => {
        console.log('Fetching');
    }

    return(
        <Container>
            <Nav/>
            <Main>
                <Box color='spotify'>
                    {data ? (
                        <p> Data is currently being displayed </p>
                    ) : (
                        <p> Data is not currently being displayed </p>
                    )}
                    <ButtonContainer>
                        <Button color='spotifyBlack' onClick={loginSpotify}>Login to Spotify</Button>
                        <Button color='spotifyBlack' onClick={fetchSpotify}>Update</Button>
                    </ButtonContainer>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Main>
        </Container>
    )
}

export default Dashboard;