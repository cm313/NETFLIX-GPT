import React from 'react'
import Netflix_Logo from "../images/Netflix_Logo.png"
const Header = () => {
  return (
    <div className=" px-4 py-2 z-50">
      <img className="z-50 w-44 h-20 mt-4 absolute hover:cursor-pointer" src = {Netflix_Logo} alt="Logo"/>
      </div>
  )
}

export default Header