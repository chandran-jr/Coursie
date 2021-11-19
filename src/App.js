import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Filterbar from './Filterbar.js';
import Header from './Header.js';
import { fetch_subjects } from "./redux/Subjects/SubjectActions";
import { Provider } from 'react-redux';
import store from "./redux/store"


function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetch_subjects())
  },[dispatch])

  return (
    <Provider store={store}>
    <div className="App">
    <Header className="header"/>
    <Filterbar/>
    </div>
    </Provider>);
}


export default App
