import React from 'react'
import { GiPlayButton } from "react-icons/gi";

const VideoTitle = (props) => {
  const{title,overview} = props;
  return (
    <div className="md:pt-60 pt-32 w-screen aspect-video pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold md:text-2xl text-lg">{title}</h1>
      <p className="w-1/2 hidden md:inline-block">{overview}</p>
      <div className="pt-4 flex">
        <button className="bg-white text-black md:px-6 px-2 py-1 bg-opacity-70 font-medium rounded-sm hover:bg-opacity-80">
          <div className="flex items-center">
          <GiPlayButton /> 
          <div>Play</div>
          </div>
          </button>
        <button className=" hidden md:inline-block bg-gray-600 md:px-6 py-1 ml-2 bg-opacity-70 text-white font-medium rounded-sm">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle