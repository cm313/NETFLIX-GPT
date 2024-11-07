import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addUpCommingMovies} from "../utils/moviesSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();
   
  const getUpCommingMoviesList = async ()=>{
   const  data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
   const jsonData = await data?.json();
   dispatch(addUpCommingMovies(jsonData?.results));

  }

  useEffect(()=>{
   getUpCommingMoviesList();
  }, [])
}

export default useUpCommingMovies