import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addUpCommingMovies} from "../utils/moviesSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();
   const upCommingMovies = useSelector((store)=>store?.movies?.upCommingMovies);
  const getUpCommingMoviesList = async ()=>{
   const  data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
   const jsonData = await data?.json();
   dispatch(addUpCommingMovies(jsonData?.results));
  }

  useEffect(()=>{
  !upCommingMovies && getUpCommingMoviesList();
  }, [])
}

export default useUpCommingMovies