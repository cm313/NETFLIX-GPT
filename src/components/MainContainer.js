import React from 'react'
import VideoTrailer from "./VideoTrailer"
import VideoTitle from "./VideoTitle"
import {useSelector} from "react-redux";

const MainContainer = () => {
    
  const moviesList = useSelector((store)=>store?.movies?.nowPlayingMovies);
  if(!moviesList)
    return;
  const mainMovie = moviesList[0];
  const{original_title, overview, id} = mainMovie;

  return (
    <div className="pt-[20%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview = {overview}/> 
     <VideoTrailer movieId={id}/>
    </div>
  )
}

export default MainContainer