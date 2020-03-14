import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Login from './components/Login/Login';
import DashBoard from './components/Dashboard/Dashboard';

// Syled Component Imports

function App() {
  return (
    <div className="App">
      <Route path='/admin'>
        <Login/>
      </Route>
      <Route path='/dashboard'>
        <DashBoard/>
      </Route>
    </div>
  );
}

export default App;
