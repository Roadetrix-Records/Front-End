import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Home from './components/Home';
import Releases from './components/Releases';
import Submissions from './components/Submissions';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

// Util Imports
import spotifyCallback from './utils/spotifyCallback';

function App() {
  return (
    <div className="App">
      
      {/* User Page Routes */}
      <Route exact path='/'>
        <Header dark={true}/>
        <Home/>
      </Route>
      <Route exact path='/releases'>
        <Header/>
        <Releases/>
      </Route>
      <Route path='/releases/:id'>
        <Header/>
      </Route>
      <Route path='/submissions'>
        <Header />
        <Submissions/>
      </Route>
      <Route path='/about'>
        <Header/>
      </Route>
      <Route path='/contact'>
        <Header/>
      </Route>
      <Route path='/callback'>
        {spotifyCallback()}
      </Route>

      {/* Admin Routes */}
      <Route exact path='/admin'>
        <Login/>
      </Route>
      {/* TODO: Make private route */}
      <Route path='/admin/dashboard'>
        <Dashboard/>
      </Route>
    </div>
  );
}

export default App;
