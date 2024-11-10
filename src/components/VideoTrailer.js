import React from 'react'
import {useSelector} from "react-redux";
import useMovieTrailer from '../customHooks/useMovieTrailer';


const VideoTrailer = (props) => {
  const movieTrailerData = useSelector((store)=>store?.movies?.movieTrailer) 
  const{movieId} = props; 
 useMovieTrailer(movieId);

  return (
    <div>
    < iframe className="w-screen aspect-video" 
    src={`https://www.youtube.com/embed/${movieTrailerData?.key}?si=lombBXHJX02JPbV4?&autoplay=1&mute=1`} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
     </iframe>
    </div>
  )
}

export default VideoTrailer