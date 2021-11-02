import React from 'react';
import './App.css';
import Filterbar from './Filterbar.js';
import Header from './Header.js';
function App() {
  return (
    <div className="App">
    <Header className="header"/>
    <Filterbar/>
    </div>
  );
}

export default App;
