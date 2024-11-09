import React from 'react'
import MovieCards from './MovieCards'


const MovieLists = ({title, movies}) => {
  return (
    <div className="pt-6 " >
      <h1 className="font-bold text-base md:text-xl text-white ">{title}</h1>
      <div className="pt-2 flex overflow-x-scroll">
      <div className="flex">
        {
          movies?.map((movie)=>{
            const{id, poster_path, original_title} = movie;
          return  <MovieCards key={id} path={poster_path} title={original_title}/>
          })
        }
      </div>
    </div>
    </div>
  )
}

export default MovieLists
