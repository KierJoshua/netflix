
import cards_data from "../assets/cards/Cards_data";
import "../App.css";
import { useEffect, useState } from "react";

const Cards = ({category}) => {

    const [api,setApi] = useState([]);
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU4Zjg5MDYyNTBkYjM0Mjc2YWI1MjUyNjY2ZTliZCIsIm5iZiI6MTczNzAyMzYzOS43NzIsInN1YiI6IjY3ODhlMDk3OTRkOTU4MzlmM2FkMjVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUnpv5dkjsqS1FE8bwvWX_H2J8Ej71zWIESrK9o2_c'
      }
    };
    
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApi(res.results))
      .catch(err => console.error(err));
    },[])

  return (
    <>
      <div className="mt-10 w-full">
        <div className="grid grid-cols-12 gap-1">
          {api.map((card, index) => (
            <div
              className="col-span-2 my-5 mx-1 relative  cursor-pointer hover:scale-110 transition-transform duration-300"
              key={index}
            >
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" className="rounded" />
              <p className="absolute bottom-2 left-2 text-transparent hover:text-white">{card.original_title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;