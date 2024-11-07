import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="filter brightness-75 z-0" src={BG_IMG_URL} alt="Background Loading"></img>
      </div>
      <GptSearchBar/>
      
    </div>
  )
}

export default GptSearch