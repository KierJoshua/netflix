import React, { useEffect, useState } from 'react'
import backArrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      };
    const {id,type} = useParams();
    const [api,setApi] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    });

    console.log("Extracted Params:", { id, type });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU4Zjg5MDYyNTBkYjM0Mjc2YWI1MjUyNjY2ZTliZCIsIm5iZiI6MTczNzAyMzYzOS43NzIsInN1YiI6IjY3ODhlMDk3OTRkOTU4MzlmM2FkMjVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUnpv5dkjsqS1FE8bwvWX_H2J8Ej71zWIESrK9o2_c'
        }
      };

      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApi(res.results[0]))
        .catch(err => console.error(err));
      },[])

      console.log(api)
      
  return (
    <div className='w-full h-screen flex flex-col items-center bg-black relative'>
        <img src={backArrow} alt="" className='w-14 absolute left-6 top-6 cursor-pointer' onClick={goBack}/>
        <iframe src={`https://youtube.com/embed/${api.key}`} className='w-[90%] h-[90%] mt-8 rounded'></iframe>
        <div className='flex justify-between text-white w-[90%] font-semibold'>
            <p>{api.published_at.slice(0,10)}</p>
            <p>{api.name}</p>
            <p>{api.type}</p>
        </div>

    </div>
  )
}

export default Player