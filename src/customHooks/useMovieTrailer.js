import {useEffect} from 'react'
import {API_OPTIONS} from "../utils/constants"
import {addMovieTrailer} from "../utils/moviesSlice";
import {useDispatch} from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
   // fetching trailer video && updating the store with trailer data
   const getMovieVideo = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
    const jsonData = await data.json();
    const filteredData = jsonData.results.filter((video)=>video.type == "Trailer");
    const trailer = filteredData.length ? filteredData[0] : jsonData.results[0];
    dispatch(addMovieTrailer(trailer));
   }

   useEffect(()=>{
    getMovieVideo();
   },[])
}

export default useMovieTrailer