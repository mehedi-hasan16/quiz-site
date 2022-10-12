import React, { useEffect, useState } from 'react';
import Alltopics from '../Alltopics/Alltopics';

const Home = () => {
    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data=>setData(data.data));
    },[])
    return (
        <div>

         {
            data.map(element=>(<Alltopics data={element}></Alltopics>))
         }
          
            
        </div>
    );
};

export default Home;