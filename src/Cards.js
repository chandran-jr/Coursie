import React, { useEffect, useState } from 'react';
import './Cards.css';
import Card from './Card.js';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Count from './Count.js';
import Graph from './Graph';


function Cards({cn,cs,date,sp}) {

    const [subjects,setSubjects] = useState([]);
    const [currentPage,setcurrentPage] = useState(1);
    const includeCourse = ['Course Name'];
    const includeChild = ['Child Subject'];
    const [start,setStart] = useState(0);
    const [loading,setLoading] = useState(false);
    const [end,setEnd] = useState(6);
    const dateFromPicker = date;
    const dateToSearch = new Date(dateFromPicker);
    dateToSearch.setHours(0,0,0,0);

    let currentData;

    useEffect(()=>{
      async function fetchHandle () {
        setLoading(true);
        await axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
       .then((response)=>{
         setSubjects(response.data.slice(0,300));
       })
       setLoading(false);
      }
      fetchHandle()
      
     },[]);

     function convert(str) {
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
  const newDateToSearch = convert(dateToSearch);

     let dataSearch  = subjects.filter(item =>{
        return Object.keys(item).some(key =>{
           return includeCourse.includes(key) ? item[key].toString().toLowerCase().includes(cn.toString().toLowerCase()) : false }
            )
    })
   .filter(items =>{
        return Object.keys(items).some(key =>{
            return includeChild.includes(key) ? items[key].toString().toLowerCase().includes(cs.toString().toLowerCase()) : false  }
            )
    }).filter(function (el) {    
      var filteDateString = el['Next Session Date']
      var replacedDate = filteDateString.replace('nd','').replace('rd','').replace('th','').replace('st','')
      var filterDate = new Date(replacedDate)
      const stringDate = convert(filterDate);
      if(dateFromPicker !=="") {
      if(dateToSearch !== 'Invalid Date'){
          if( filterDate !== 'Invalid Date' ){
              if(stringDate === newDateToSearch){
                  return el
              } 
          }
      }
    }
      else{
          return el
      }
      
      
      
    }).filter(function (el) {    
      var self = el['Next Session Date']
      if(sp){
              if(self==='Self paced'){
                  return el
              } 
          }
      else{
          return el
      }
      
      
      
    });


    currentData = dataSearch.slice(start,end);

     const handleChange = (event, value) => {
        setcurrentPage(value);
        const st = (value*6)-6;
        const en = st+6;
         setStart(st);
         setEnd(en)
      };

      const noCourse = ()=>{
        if(dataSearch == ''){
            return <h3 className="noCourses">No course found !!</h3>
        }
    }

    const loadingIcon = ()=>{
      return( <div class="loader" role="status">
    </div>)
  }




    return (

      <div className="Cards">

      <div className="count">
        <Count length={dataSearch.length} />
      </div>

    <div className="Cards__card">

    { loading ? loadingIcon() : noCourse() }

{currentData.map((post, index) => (
    <Card
    courseId={post['Course Id']}
    courseName={post['Course Name']}
    provider={post['Provider']}
    uni={post['Universities/Institutions']}
    parentSub={post['Parent Subject']}
    childSub={post['Child Subject']}
    url={post['Url']}
    nextSesh={post['Next Session Date']}
    length={post['Length']}
    vidUrl={post['Video(Url)']}
    />
    
  ))
}

</div>

{
        dataSearch ? <Pagination className="pagination" count={Math.round(dataSearch.length/6)} page={currentPage} onChange={handleChange} color='primary' style={{margin:'auto'}} />:null
    }

   {dataSearch ? <Graph
      data={subjects}/> : <Graph data={subjects}
    /> }

    <div className="nothing">

    </div>


        </div>
    )

}

export default Cards
