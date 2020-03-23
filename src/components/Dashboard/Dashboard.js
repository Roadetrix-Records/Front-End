import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Component Imports
import Nav from './Nav/Nav';

// Style Imports
import { Container, Main, Box, Button } from './DashboardStyles';

function Dashboard(){
    const dispatch = useDispatch();

    const fetchSpotify = () => {
        console.log('Fetching');
    }

    return(
        <Container>
            <Nav/>
            <Main>
                <Box color='spotify'>
                    <Button color='spotifyBlack' onClick={fetchSpotify}>Update Spotify</Button>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Main>
        </Container>
    )
}

export default Dashboard;