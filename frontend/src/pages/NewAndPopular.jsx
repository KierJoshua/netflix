import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import CardsSlick from "../components/CardsSlick";
import Footer from '../components/Footer';

function NewAndPopular() {

  return (
    <>
    <div className="bg-[#141414] text-white font-[Poppins] overflow-hidden min-h-screen">
      <Navbar />
      <div className='mt-24 px-[3%]'>
      <CardsSlick title="Top Rated" category={"top_rated"}/>
      <CardsSlick title="Upcoming" category={"upcoming"}/>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default NewAndPopular