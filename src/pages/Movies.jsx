import React, { useRef, useEffect } from 'react'
import CardsSlick from "../components/CardsSlick";

function Movies() {

  const ref = useRef();

    useEffect(() => {
      window.addEventListener('scroll', () => {
          if(window.scrollY >= 80) {
              ref.current.classList.add('bg-black')
          } else {
              ref.current.classList.remove('bg-black')
          }
      })
  },[])


  return (
    <div className="">
      <div className='fixed top-10 sm:top-16 w-full py-4 z-10 ps-[6%]' ref={ref}>
      <h1 className='text-sm sm:text-xl md:text-3xl  font-semibold'>MOVIES</h1>
      </div>
      <div className='ps-[6%]'>
    <CardsSlick title="Popular" category={"popular"}/>
    <CardsSlick title="Top Rated" category={"top_rated"}/>
    <CardsSlick title="Upcoming" category={"upcoming"}/>
    </div>
    </div>
  )
}

export default Movies