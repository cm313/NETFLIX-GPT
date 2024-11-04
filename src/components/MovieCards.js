import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCards = ({path, title}) => {
  return (
    <div className="w-48 pr-4">
     <img src={IMG_CDN_URL+path} alt={title}></img>
    </div>
  )
}

export default MovieCards