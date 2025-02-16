import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function CardsSlick({title, category,}) {

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

  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-0 transform py-12 px-3 flex items-center bg-transparent -translate-y-1/2 text-4xl text-transparent cursor-pointer hover:text-white hover:bg-[#6d6d6e66;] transition-colors duration-200 z-10"
      onClick={onClick}
    >
      &#10095; {/* Right Arrow Symbol */}
    </div>
  );

  // Custom Prev Arrow Component
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-0 transform py-12 px-3 flex items-center bg-transparent -translate-y-1/2 text-4xl text-transparent cursor-pointer hover:text-white hover:bg-[#6d6d6e66;] transition-colors duration-200 z-10"
      onClick={onClick}
    >
      &#10094; {/* Left Arrow Symbol */}
    </div>
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0, // Ensure it starts from the first slide
          infinite: true // Enable infinite scrolling on mobile
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true // Enable infinite scrolling
        }
      },      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <div className="slider-container w-full relative">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Slider {...settings}>
        {api.map((card, index) => (  
          <Link to={`/player/${card.id}`} key={index}> 
          <div
            className="my-5 relative cursor-pointer hover:scale-110 transition-transform duration-300"
            key={index}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" className="w-56" />
            <p className="absolute bottom-5 right-10">{card.original_title}</p>
          </div>
          </Link>  
        ))}
      </Slider>
    </div>
  );
}

export default CardsSlick;
