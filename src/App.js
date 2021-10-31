import React from 'react';
import './App.css';
import Header from './Header.js';
import Filterbar from './Filterbar.js';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
    <Header/>
    <Filterbar/>

    <Cards/>

    </div>
  );
}

export default App;
