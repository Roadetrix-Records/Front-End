import React from 'react';

// Component Imports
import Nav from './Nav/Nav';

// Style Imports
import { Container, Main, Box } from './DashboardStyles';

function Dashboard(){
    


    return(
        <Container>
            <Nav/>
            <Main>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Main>
        </Container>
    )
}

export default Dashboard;