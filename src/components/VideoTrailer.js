import React from 'react'
import {useSelector} from "react-redux";
import useMovieTrailer from '../customHooks/useMovieTrailer';


const VideoTrailer = (props) => {
  const movieTrailerData = useSelector((store)=>store?.nowPlayingMovies?.movieTrailer) 
  const{movieId} = props;

 useMovieTrailer(movieId);

  return (
    <div>
    < iframe width="560" 
    height="315" 
    src={`https://www.youtube.com/embed/${movieTrailerData?.key}?si=lombBXHJX02JPbV4`} 
    title="YouTube video player" 
     >
     </iframe>
    </div>
  )
}

export default VideoTrailer