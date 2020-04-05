import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Home from './components/Home';
import Submissions from './components/Submissions';

function App() {
  return (
    <div className="App">
      
      <Route exact path='/'>
        <Header dark={true}/>
        <Home/>
      </Route>
      <Route path='/releases'>
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
