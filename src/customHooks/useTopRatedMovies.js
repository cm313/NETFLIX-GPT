import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addTopRatedMovies} from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store)=>store?.movies?.TopRatedMovies);
   
  const getTopRatedMoviesList = async ()=>{
   const  data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
   const jsonData = await data?.json();
   dispatch(addTopRatedMovies(jsonData?.results));

  }

  useEffect(()=>{
  !TopRatedMovies && getTopRatedMoviesList();
  }, [])
}

export default useTopRatedMovies