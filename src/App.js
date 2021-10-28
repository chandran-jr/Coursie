import React from 'react';
import './App.css';
import Header from './Header.js';
import Filterbar from './Filterbar.js';
import Pagination from '@mui/material/Pagination';
import Cards from './Cards.js';

function App() {
  return (
    <div className="App">
    <Header/>
    <Filterbar/>

    <Cards/>


    <div className="pagination">
    <Pagination count={10} color="secondary" />
    </div>


    </div>
  );
}

export default App;
