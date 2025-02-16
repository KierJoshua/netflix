import React from 'react'
import hero from "../assets/hero_banner.jpg";
import title from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";
import CardsSlick from './CardsSlick';

function Hero() {
  return (
    <div className="ps-[6%] w-full relative">
    <img src={hero} alt="" className="w-full mask-gradient" />
    <div className="absolute bottom-0 w-full">
      <img src={title} alt="" className="w-32 sm:w-56 md:w-[90%] max-w-[420px] mb-7" />
      <p className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] text-xs sm:text-sm md:text-md">
        Discovering his ties to a secret ancient order, a young man living in
        modern Istanbul embarks on a quest to save the city from an immortal
        enemy
      </p>
      <div className="flex gap-2 mt-5 mb-10">
      <button className="flex rounded items-center gap-2 text-xs md:text-sm px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 bg-white text-black border-white hover:bg-[#ffffffbf] hover:border-[#ffffffbf]">
  <img src={play} alt="Play Icon" className="w-4 sm:w-5 md:w-6" />
  Play
</button>

<button className="flex items-center rounded gap-2 text-xs md:text-sm px-3 sm:px-5 md:px-8 py-1 sm:py-2 md:py-3 bg-[#6d6d6eb3] border-[#6d6d6eb3] text-white hover:bg-[#6d6d6e66] hover:border-[#6d6d6e66]">
  <img src={info} alt="Info Icon" className="w-4 sm:w-5 md:w-6" />
  More Info
</button>

      </div>
      <div className="hidden md:w-[90%]">
        <CardsSlick title="Now Playing" category={"now_playing"}/>
      </div>
    </div>
  </div>
  )
}

export default Hero