import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
   
  const getPopularMoviesList = async ()=>{
   const  data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
   const jsonData = await data.json();
   dispatch(addPopularMovies(jsonData?.results));

  }

  useEffect(()=>{
   getPopularMoviesList();
  }, [])
}

export default usePopularMovies