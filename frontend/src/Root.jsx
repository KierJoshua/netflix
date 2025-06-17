import React from 'react'
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'

function Root() {
  return (
    <div className="bg-[#141414] text-white font-[Poppins] overflow-hidden">
    <Navbar />
    <Hero />
    <Outlet />
    <Footer />
  </div>
  )
}

export default Root