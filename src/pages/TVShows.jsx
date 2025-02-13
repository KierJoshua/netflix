import React, { useEffect, useRef } from 'react'
import CardsSlickTV from '../components/CardsSlickTV'

function TVShows() {

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
    <div>
      <div className='ps-[6%] fixed top-16 z-10 w-full py-4' ref={ref}>
        <h1 className='text-md sm:text-xl md:text-3xl font-semibold '>TV SHOWS</h1>
        </div>
        <div  className='ps-[6%]'>
        <CardsSlickTV title={"Airing Today"} category={"airing_today"} />
        <CardsSlickTV title={"On The Air"} category={"on_the_air"} />
        <CardsSlickTV title={"Popular"} category={"popular"} />
        <CardsSlickTV title={"Top Rated"} category={"top_rated"} />
        </div>
    </div>
  )
}

export default TVShows