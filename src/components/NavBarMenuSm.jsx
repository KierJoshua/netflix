import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarMenuSm({title,link}) {
  return (
    <NavLink to={`/${link}`} className="w-full">
    {(isActive) =>        <li
          className={`w-full text-center text-xs cursor-pointer py-3 px-5 text-gray-300 hover:text-white hover:bg-gray-300/30 ${
            isActive ? "text-white hover:bg-gray-300/20" : ""
          }`}
        >
          {title}
        </li>}        
</NavLink>
  )
}

export default NavBarMenuSm