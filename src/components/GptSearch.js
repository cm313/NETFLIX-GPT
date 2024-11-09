import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG_URL } from '../utils/constants'
import MovieSuggestions from './MovieSuggestions'



const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="filter brightness-75 h-screen w-screen object-cover" src={BG_IMG_URL} alt="Background Loading"></img>
      </div>
    <div>
      <GptSearchBar/>
      <MovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch