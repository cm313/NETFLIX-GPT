import React,{useRef} from 'react'
import model from "../utils/geminiAi"
import {useDispatch} from "react-redux";
import Error from "./Error";
import { API_OPTIONS } from '../utils/constants';
import { addSearchedMovieLists } from '../utils/geminiSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const  searchedMovieResults = async (movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data?.json();
    return json?.results;
  }

   const handleGptSearchButton = async ()=>{
   const QueryForGeminiAI = " Act as a Movie Recommendation System and suggest some good movies for the query"+searchText.current.value+". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, sholay, Don, Golamal, Koil Milgaya"; 
   try {
    const aiResults = await model.generateContent(QueryForGeminiAI);
    if (!aiResults.response) {
      return <Error/>; // Handling Errors
    }
    const aiMovieResultsList = aiResults.response.text().split(",");
     
    const promiseArray = aiMovieResultsList.map((movie)=>searchedMovieResults(movie));
     // ["Promise", "Promise","Promise", "Promise", "Promise"]
     const searchedMoviesTMDB = await Promise.all(promiseArray);
      dispatch(addSearchedMovieLists({movieNames: aiMovieResultsList, movieResults: searchedMoviesTMDB }));

  } catch (error) {
    console.error("Error generating content:", error);
  }
  
    }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="bg-black w-3/4 md:w-1/2 grid grid-cols-12 rounded-sm" onSubmit={(event)=>event.preventDefault()} >
        <input ref={searchText} className="py-2 px-2 my-4 mx-2 col-span-9 rounded-md" type="text" placeholder="What's  your mood to watch, search here"/>
        <button className="bg-red-800 py-2 px-4 my-4 mr-2 col-span-3 text-white rounded-md" onClick={handleGptSearchButton} >Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar