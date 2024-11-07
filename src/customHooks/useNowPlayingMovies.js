import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
   
  const getNowPlayingMoviesList = async ()=>{
   const  data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
   const jsonData = await data?.json();
   dispatch(addNowPlayingMovies(jsonData?.results));

  }

  useEffect(()=>{
   getNowPlayingMoviesList();
  }, [])
}

export default useNowPlayingMovies