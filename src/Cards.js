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
         
         setCurrentItems(response.data.slice(0,6));
       })
     },[]);
    


    return (
        <div className="Cards">


    {currentItems&&currentItems.map((item) =>  <Card
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
    
    />)}

            
        </div>
    )
}

export default Cards
