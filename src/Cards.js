import React, { useEffect, useState } from 'react';
import './Cards.css';
import Card from './Card.js';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';


function Cards() {

    const [subjects,setSubjects] = useState(null);
    const [pages,setPages] = useState(null);
    const [currentPage,setcurrentPage] = useState(1);
    const [currentItems,setCurrentItems] = useState(null);

    useEffect(()=>{
        axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
       .then((response)=>{
         setSubjects(response.data);
         setPages(Math.round(response.data.length/6));
         setPages(Math.round(response.data.length/6));
         setCurrentItems(response.data.slice(0,6));
       })
     },[]);
    
     const handleChange = (event, value) => {
        setcurrentPage(value);
        const startIndex = (value * 6) - 6;
       const endIndex = startIndex + 6;
       const temp= subjects.slice(startIndex, endIndex);
       setCurrentItems(temp);
      };


    return (
        <div className="Cards">


    {currentItems?currentItems.map((item) =>  <Card
    courseId={item['Course Id']}
    courseName={item['Course Name']}
    provider={item['Provider']}
    uni={item['Universities/Institutions']}
    parentSub={item['Parent Subject']}
    childSub={item['Child Subject']}
    url={item['Url']}
    nextSesh={item['Next Session Date']}
    length={item['Length']}
    vidUrl={item['Video(Url)']}
    
    />): null}

{subjects?<Pagination count={Math.round(subjects.length/6)} page={currentPage} onChange={handleChange} color='primary' style={{margin:'auto'}} />:null}

        </div>
    )
}

export default Cards
