import {createSlice} from "@reduxjs/toolkit";

const moviesSlice  = createSlice({
  name: "movies",
  initialState: {
           nowPlayingMovies:null,
           movieTrailer: null,
           popularMovies: null,
           TopRatedMovies:null,
           upCommingMovies:null
  },
  reducers : {
    addNowPlayingMovies : (state, action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer : (state, action)=>{
      state.movieTrailer = action.payload;
    },
    addPopularMovies : (state, action)=>{
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action)=>{
      state.TopRatedMovies = action.payload;
    },
    addUpCommingMovies: (state, action)=>{
      state.upCommingMovies = action.payload;
    }
  },
});

export default moviesSlice.reducer;
export const{addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpCommingMovies} = moviesSlice.actions;