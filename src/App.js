import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Home from './components/Home/Home';
import Releases from './components/Releases/Releases';
import Submissions from './components/Submissions/Submissions';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import DashBoard from './components/Dashboard/Dashboard';

// Syled Component Imports

function App() {
  return (
    <div className="App">
      {/* Public Routes */}
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/releases'>
        <Releases/>
      </Route>
      <Route path='/submissions'>
        <Submissions/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
      <Route path='/admin'>
        <Login/>
      </Route>
      {/* Private Routes */}
      <Route path='/dashboard'>
        <DashBoard/>
      </Route>
    </div>
  );
}

export default App;
