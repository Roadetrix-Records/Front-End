import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Submissions from './components/Submissions';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/'>

      </Route>
      <Route path='/submissions'>
        <Submissions/>
      </Route>
    </div>
  );
}

export default App;
