import React from 'react';

// Component Imports
import Header from './components/Header/Header';
import Home from './components/Home';
import Releases from './components/Releases';
import Submissions from './components/Submissions';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Details from './components/Releases/Details';
import About from './components/About';

// Dependency Imports
import { Route } from 'react-router-dom';

// Util Imports
import spotifyCallback from './utils/spotifyCallback';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <div className="App">
      
      {/* User Page Routes */}
      <Route exact path='/'>
        {/* <Header dark="true"/> */}
        <Home/>
      </Route>
      <Route exact path='/releases'>
        <Header/>
        <Releases/>
      </Route>
      <Route path='/releases/:id'>
        <Header/>
        <Details/>
      </Route>
      <Route path='/submissions'>
        <Header />
        <Submissions/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/contact'>
        <Header/>
      </Route>
      <Route exact path='/callback'>
        {spotifyCallback()}
      </Route>

      {/* Admin Routes */}
      <Route exact path='/admin'>
        <Login/>
      </Route>
      {/* TODO: Make private route */}
      <PrivateRoute component={Dashboard} path='/admin/dashboard' exact/>
    </div>
  );
}

export default App;
