import React,{useRef} from 'react'
import model from "../utils/geminiAi"
import {useDispatch} from "react-redux";
import { addAiRecommededMovies } from '../utils/moviesSlice';
import Error from "./Error";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

   const handleGptSearchButton = async ()=>{
   const QueryForGeminiAI = " Act as a Movie Recommendation System and suggest some good movies for the query"+searchText.current.value+". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, sholay, Don, Golamal, Koil Milgaya"; 
   try {
    const aiResults = await model.generateContent(QueryForGeminiAI);
    if (!aiResults.response) {
      return <Error/>; // Handling Errors
    }
    const aiResultsList = aiResults.response.text().split(",");
  } catch (error) {
    console.error("Error generating content:", error);
  }
  
    }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-sm" onSubmit={(event)=>event.preventDefault()} >
        <input ref={searchText} className="py-2 px-2 my-4 mx-2 col-span-9 rounded-md" type="text" placeholder="What's  your mood to watch, search here"/>
        <button className="bg-red-800 py-2 px-4 my-4 mr-2 col-span-3 text-white rounded-md" onClick={handleGptSearchButton} >Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar