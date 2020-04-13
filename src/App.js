import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Home from './components/Home';
import Releases from './components/Releases';
import Submissions from './components/Submissions';

function App() {
  return (
    <div className="App">
      
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
    </div>
  );
}

export default App;
