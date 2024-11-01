import React from 'react'
import Netflix_Logo from "../images/Netflix_Logo.png"
const LogoHeader = () => {
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black w-screen z-10">
      <img className="w-44 h-20 mt-4 hover:cursor-pointer" src = {Netflix_Logo} alt="Logo"/>
      </div>
  )
}

export default LogoHeader;