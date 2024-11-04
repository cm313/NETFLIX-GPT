import React from 'react'
import { GiPlayButton } from "react-icons/gi";

const VideoTitle = (props) => {
  const{title,overview} = props;
  return (
    <div className="pt-60 w-screen aspect-video pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="w-1/2 ">{overview}</p>
      <div className="pt-4 flex">
        <button className="bg-white text-black px-6 py-1 bg-opacity-70 font-medium rounded-sm hover:bg-opacity-80">
          <div className="flex items-center">
          <GiPlayButton /> 
          <div>Play</div>
          </div>
          </button>
        <button className="bg-gray-600 px-6 py-1 ml-2 bg-opacity-70 text-white font-medium rounded-sm">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle