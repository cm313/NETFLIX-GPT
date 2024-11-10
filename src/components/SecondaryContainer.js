import React from 'react'
import { useSelector } from 'react-redux'
import MovieLists from './MovieLists';

const SecondaryContainer = () => {
  const moviesList = useSelector((store)=>store?.movies);
  if(!moviesList?.nowPlayingMovies) 
    return;
  return (
    <div className="bg-black w-screen px-5 ">
      <div className=" mt-0 md:-mt-48 relative z-10 ">
    <MovieLists title={"Up Comming"} movies={moviesList?.upCommingMovies}/>    
    <MovieLists title={"Now Playing"} movies={moviesList?.nowPlayingMovies}/>
    <MovieLists title={"Popular"} movies={moviesList?.popularMovies}/>
    <MovieLists title={"Top Rated"} movies={moviesList?.TopRatedMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer