import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarMenu({title,link}) {
  return (
        <NavLink to={`/${link}`}>
            {(isActive) => <li className={`cursor-pointer text-gray-300 hover:text-white ${isActive ? "text-white" : ""}`}>{title}</li>}        
        </NavLink>
  )
}

export default NavBarMenu