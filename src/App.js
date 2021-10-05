import './App.css';
import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Registration from './registration';
import YourDetails from './yourdetails';

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Registration}/>
    </HashRouter>
  );
}

export default App;
