import React, { useEffect } from 'react';
import './App.css';
import Filterbar from './Filterbar.js';
import { Provider } from 'react-redux';
import {connect} from 'react-redux'
import store from "./redux/store"
import { fetch_subjects } from './redux/Subjects/Subjects/SubjectActions';
import Header from './Header.js';
function App(props) {

  useEffect(()=>{
    props.fetchinfo()
  },[])

  return (

    <Provider store={store}>
    <div className="App">
    <Header className="header"/>
    <Filterbar props={props} />
    </div>
    </Provider>
  );
}

const mapStatetoProps=state=>{
  return {
      subjects:state.subjects
  }
 
}

const mapDispatchtoProps=dispatch=>{
  return {
      fetchinfo:()=>{dispatch(fetch_subjects())}
  }
  
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)
