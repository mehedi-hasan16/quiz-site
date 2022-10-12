import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Option from '../Option/Option';
import Questions from '../Questions/Questions';

const TopicDetails = () => {

    const {id} =useParams();
    const [question, setQuestion] =useState([]);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res=>res.json())
        .then(data=>setQuestion(data.data.questions))
    },[])

    // console.log(question)
    return (
        <div>

            
            {
                question.map(element=><Questions question={element}></Questions>)
            }


        
        </div>
    );
};

export default TopicDetails;