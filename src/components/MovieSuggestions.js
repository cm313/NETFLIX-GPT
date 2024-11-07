import React from 'react'
import {useSelector} from "react-redux";
import MovieLists from './MovieLists';

const MovieSuggestions = () => {
  const {movieNames,  movieResults} = useSelector((store)=>store?.geminiAI);
  if(!movieNames)
    return null;
  return (
      <div className="p-4 m-4 text-white bg-black bg-opacity-70">
        <div>
          {
            movieNames?.map((movie, index)=><MovieLists key={movie} title={movie} movies={movieResults[index]}/>)
          }
        </div>
      </div>
  )
}

export default MovieSuggestions