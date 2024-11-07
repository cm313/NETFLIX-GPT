import React from 'react'
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from '../customHooks/usePopularMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpCommingMovies from '../customHooks/useUpCommingMovies';
import GptSearch from './GptSearch';
import {useSelector} from "react-redux";


const Browse = () => {

  const showGptSearch = useSelector((store)=>store?.geminiAI?.isGptSearchEnabled);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();


  return (
    <div>
      <Header/>
      {
        showGptSearch ?
         <GptSearch/>
          :
         <>
         <MainContainer/>
         <SecondaryContainer/>
         </>
      }
    </div>
  )
}

export default Browse